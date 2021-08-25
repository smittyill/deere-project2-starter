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

// Show
router.get("/:id", (req, res) => {
    List.findByPk(req.params.id).then((list) => {    
        console.log(list);
        res.render(
          "lists/show.ejs", //render views/edit.ejs
          {
           list
          }
        );
    });
  });

//add
router.post("/", (req, res) =>{
    console.log("list is" + List);
    req.body.userId = req.user.id;
    List.create(req.body).then((newList) => {
        
        res.redirect("/lists");
      });    
})
//get all
router.get("/", (req, res) => {
    List.findAll({ order: ["id"], where: {userId: req.user.id} }).then((lists) => {
        console.log("user is"+ req.user.id)
        
      res.render("lists/index.ejs", {
        lists,
      });
    });
  });
 //edit
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
  //update
router.put("/:id",(req,res) => {
    List.update(req.body, {
        where: {id: req.params.id },
        returning: true,
    }).then((resultSet => {
        let list = resultSet[1][0];
        res.redirect("/lists");
    }))
})
//delete
router.delete("/:id", (req, res) => {
    List.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/lists"); //redirect back to index route
    });
  });

module.exports = router;