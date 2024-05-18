const jwt = require("jsonwebtoken");
const { FormData } = require("../model/schema");

const authenticaton = async (req, res, next) => {
  try {
    const { jwtToken } = req.cookies;
    const verifyToken = jwt.verify(jwtToken, process.env.SECUREKEY);
    const rootUser = await FormData.findOne({
      _id: verifyToken._id,
      "tokens.token": jwtToken,
    });
    if (!rootUser) {
      throw new Error("User not Found");
    }
    req.token = jwtToken;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (error) {
    console.log("jwt error " + error);
    res.status(400).send("authenticaton error : " + error);
  }
};

module.exports = authenticaton;
