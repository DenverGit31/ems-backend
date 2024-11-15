const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const JwtAuth = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401); // Check if token is missing

  jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token
    req.user = user;
    next();
  });
});

module.exports = JwtAuth;
