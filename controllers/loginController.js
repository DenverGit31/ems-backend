const asyncHandler = require("express-async-handler");
const { QueryTypes, where } = require("sequelize");
const db = require("../models");
const jwt = require("jsonwebtoken");
//  METHOD  : GET
//  ENDP    : "
const login = asyncHandler(async (req, res) => {
  try {
    const user = req.body.username;
    const token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN);
    const findAccount = await db.userLoginCredentials.findOne({
      raw: true,
      where: {
        user_name: req.body.username,
        password: req.body.password,
        account_status: 1,
      },
    });

    console.log(token);
    if (findAccount) {
      res.status(201).json({
        data: {
          message: "Log in successfull",
          isAuthtoken: token,
          userId: findAccount.id,
        },
      });
    }
  } catch (error) {
    console.log("api/accounts/signUp : POST : >>> ", error);
    res.status(500).send(error);
  }
});

module.exports = { login };
