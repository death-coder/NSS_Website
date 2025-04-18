const express = require('express');
const router = express.Router();

const ADMIN = {
  username: 'admin',
  password: 'nss2025'
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN.username && password === ADMIN.password) {
    return res.json({ success: true, token: "secret123" }); // Replace with JWT later
  }
  return res.status(401).json({ success: false, message: 'Invalid credentials' });
});

module.exports = router;
