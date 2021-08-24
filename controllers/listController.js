const express = require("express");
const router = express.Router();
const List = require("../models").List;
const User = require("../models").User;
//NEW list
router.get("/new", (req, res) => {
    res.render("lists/new.ejs", {
        user: req.user
    })
});

router.post("/", (req, res) =>{
    console.log("list is" + List);
    List.create(req.body).then((newList) => {
        
        res.redirect("/lists");
      });    
})
router.get("/", (req, res) => {
    List.findAll({ order: ["id"] }).then((lists) => {
      res.render("lists/index.ejs", {
        lists,
      });
    });
  });
 
  router.get("/:id/edit", (req, res) => {
    List.findByPk(req.params.id).then((list) => {
      
        res.render(
          "lists/edit.ejs", //render views/edit.ejs
          {
           list,

          }
        );
    });
  });
router.put("/:id",(req,res) => {
    List.update(req.body, {
        where: {id: req.params.id },
        returning: true,
    }).then((resultSet => {
        let list = resultSet[1][0];
        res.redirect("/lists");
    }))
})
router.delete("/:id", (req, res) => {
    List.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/lists"); //redirect back to index route
    });
  });

module.exports = router;