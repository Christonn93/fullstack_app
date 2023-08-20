require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
 const secret = process.env.secret;
 const token = req.headers("x-access-token");

 if (!token) {
  res.send("No active token");
 } else {
  jwt.verify(token, secret, (error, decoded) => {
   if (error) {
    req.json({ auth: false, message: "Auth failed" });
   } else {
    req.userId = decoded.id;
    next();
   }
  });
 }
};

module.exports = {
 verifyJwt,
};
