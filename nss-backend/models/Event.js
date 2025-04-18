const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({}, { strict: false, versionKey: false });

module.exports = mongoose.model("Event", eventSchema, "events_collection");
