require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(403).json({ message: "Header not provided" });
  }

  const token = header.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "Token not provided" });
  }

  jwt.verify(token, process.env.JWT_KEY, (error, payload) => {
    if (error) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = payload;

    next();
  });
};

module.exports = verifyToken;
