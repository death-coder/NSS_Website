// nss-backend/middleware/auth.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  // Extract token from Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN format
  
  // Check if token exists
  if (!token) {
    return res.status(401).json({ 
      success: false,
      message: 'Access denied. No token provided.' 
    });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        success: false,
        message: 'Token has expired' 
      });
    } else {
      return res.status(403).json({ 
        success: false,
        message: 'Invalid token' 
      });
    }
  }
};

module.exports = verifyToken;
