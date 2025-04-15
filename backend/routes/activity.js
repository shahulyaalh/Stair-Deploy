const express = require("express");
const multer = require("multer");
const path = require("path");
const Activity = require("../models/Activity");

const router = express.Router();

// Image upload config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("image"), async (req, res) => {
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

router.get("/", async (req, res) => {
  console.log("hi there");
  try {
    const activities = await Activity.find().sort({ createdAt: -1 });
    console.log(activities);
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch activities." });
  }
});

module.exports = router;
