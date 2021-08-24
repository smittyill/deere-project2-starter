const express = require("express");
const router = express.Router();
const User = require("../models").User;
const UserModel = require("../models").User;

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  console.log(req.user);
  UserModel.findByPk(req.params.id).then((userProfile) => {
    res.render("lists/new.ejs", {
      user: userProfile,
    });
  });
});

module.exports = router;
