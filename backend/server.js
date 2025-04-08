const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const path = require("path");
const nodemailer = require("nodemailer");

const Admin = require("./models/admin");
const Activity = require("./models/activity");

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = "your_super_secret_key";

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/stair-ecosystem")
  .then(() => {
    console.log("Connected to MongoDB");
    initAdmin();
  })
  .catch((err) => console.error("MongoDB connection error:", err));

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
      console.log("Default admin user created.");
    }
  } catch (err) {
    console.error("Error initializing admin user:", err);
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

// Upload Activity
app.post("/api/activities/upload", upload.single("image"), async (req, res) => {
  const { title, description } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

  try {
    const activity = new Activity({ title, description, imageUrl });
    await activity.save();
    res.status(201).json(activity);
  } catch (err) {
    res.status(500).json({ error: "Failed to save activity." });
  }
});

// Get Activities
app.get("/api/activities", async (req, res) => {
  try {
    const activities = await Activity.find().sort({ createdAt: -1 });
    res.json(activities);
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
      user: "shahulyaalh@gmail.com", // Replace with your email
      pass: "owwe ilvv oxag joew", // Replace with App Password
    },
  });

  const mailOptions = {
    from: email,
    to: "shahulyaalh@gmail.com", // Your email to receive messages
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

app.listen(5000, () =>
  console.log("🚀 Server running on http://localhost:5000")
);
