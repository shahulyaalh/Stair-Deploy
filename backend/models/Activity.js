// const mongoose = require("mongoose");

// const activitySchema = new mongoose.Schema(
//   {
//     title: String,
//     description: String,
//     imageUrl: String,
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Activity", activitySchema);
const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    imageData: {
      type: [[Number]], // 2D Array of 32-bit integers (RGBA or ARGB)
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Activity", activitySchema);
