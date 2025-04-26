const express = require('express');
const router = express.Router();
require('dotenv').config();

const ADMIN = {
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD
};

// const ADMIN = {
//   username: "admin",
//   password: "hello"
// };

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // console.log("Helo");
  if (username === ADMIN.username && password === ADMIN.password) {
    return res.json({ success: true, token: "secret123" }); // Replace with JWT later
  }
  // console.log("ADMIN_USERNAME:", process.env.ADMIN_USERNAME);
  // console.log("ADMIN_PASSWORD:", process.env.ADMIN_PASSWORD);
  return res.status(401).json({ success: false, message: 'Invalid credentials' });
});

module.exports = router;
