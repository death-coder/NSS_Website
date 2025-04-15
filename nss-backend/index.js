const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: "./nss-backend/.env" });

const app = express();
const PORT = 5000;
// app.use(express.json());

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB

console.log("****************");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("***Not Connected***"+err));
  console.log("Connecting to MongoDB with URI:", process.env.MONGO_URI);



// API Routes
app.get('/api/events', async (req, res) => {
  try{

    // const events = await Event.find();
    const events = await mongoose.connection.db.collection("events_collection").find().toArray();
    console.log("Events fetched: ",events);
    res.json(events);
  }catch(err){
    console.log("Error fetching the documents. ",err);
  }
  
});



app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
