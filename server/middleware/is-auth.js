const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "mysecretkey", (err, user) => {
      if (err) {
        return res.status(403).json("Your token is not valid");
      }
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(403).json("You are not authenticated");
  }
};
