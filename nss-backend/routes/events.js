const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

require('dotenv').config();



const ADMIN = {
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD
};


router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN.username && password === ADMIN.password) {
    const token = jwt.sign(
      { username, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    return res.json({ success: true, token });
  }
  return res.status(401).json({ success: false, message: 'Invalid credentials' });
});


router.get('/verify-token', (req, res) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: 'Token required' });

  const token = header.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid/expired token' });
    res.json({ success: true, user: decoded });
  });
});

module.exports = router;
