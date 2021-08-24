const express = require("express");
const router = express.Router();
const List = require("../models").list;
//NEW list
router.get("/new", (req, res) => {
    res.render("lists/new.ejs", {
        user: req.user
    })
});

router.post("/", (req, res) =>{
    
    list.create(req.body).then((newList) => {
        res.redirect("/list");
      });    
})

 




module.exports = router;