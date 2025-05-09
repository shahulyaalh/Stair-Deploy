const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();
const sharp = require("sharp");

const Admin = require("./models/admin");
const Activity = require("./models/Activity");

const app = express();
const allowedOrigins = [
  "http://localhost:5173", // dev Vite frontend
  "https://stair-ecosystem-1.vercel.app", // production frontend (example)
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true, // allow cookies/headers
  })
);

// app.use(express.json());
app.use(express.json({ limit: "50mb" })); // or larger if needed
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET;
const MONGO_URI = process.env.MONGO_URI;

// MongoDB Connection
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    initAdmin();
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Initialize default admin if none exists
const initAdmin = async () => {
  try {
    const existingAdmin = await Admin.findOne({ email: "admin@stair.com" });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("stair@1234", 10);
      await Admin.create({
        email: "admin@stair.com",
        password: hashedPassword,
      });
      console.log("✅ Default admin user created.");
    }
  } catch (err) {
    console.error("❌ Error initializing admin user:", err);
  }
};

// Admin login route
app.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin)
      return res.status(401).json({ error: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(401).json({ error: "Invalid email or password" });

    const token = jwt.sign({ email: admin.email }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// JWT Middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Dashboard route
app.get("/api/admin/dashboard", verifyToken, (req, res) => {
  res.json({ message: "Welcome to the admin dashboard!" });
});

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });
app.post("/api/activities/upload", async (req, res) => {
  const { title, description, image } = req.body;

  if (!image) {
    return res.status(400).json({ error: "Image is required." });
  }

  try {
    // Decode base64 image
    const buffer = Buffer.from(image, "base64");

    // Convert image to raw RGBA
    const { data, info } = await sharp(buffer)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Convert raw buffer to 2D array of 32-bit integers (RGBA format)
    const pixelArray = [];
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      const rgba = (r << 24) | (g << 16) | (b << 8) | a;
      pixelArray.push(rgba);
    }

    // Reshape to 2D array
    const width = info.width;
    const height = info.height;
    const reshaped = Array.from({ length: height }, (_, i) =>
      pixelArray.slice(i * width, (i + 1) * width)
    );

    const activity = new Activity({ title, description, imageData: reshaped });
    await activity.save();
    res.status(201).json(activity);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to process and save image." });
  }
});

app.get("/api/activities", async (req, res) => {
  try {
    const activities = await Activity.find().sort({ createdAt: -1 });
    res.json(activities); // includes imageData array
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch activities." });
  }
});

// Contact Form Email (Nodemailer)
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Start server on dynamic port for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
