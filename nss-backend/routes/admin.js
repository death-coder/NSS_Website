const express = require("express");
const router = express.Router();
const Event = require("../models/Event"); // Adjust the path as needed

// Create a new event
router.post("/events", async (req, res) => {
  try {
    const { title, description, date, imageUrl } = req.body;

    if (!title || !description || !date || !imageUrl) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEvent = new Event({
      title,
      description,
      date,
      imageUrl,
    });

    await newEvent.save();
    res.status(201).json({ message: "Event created", event: newEvent });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
