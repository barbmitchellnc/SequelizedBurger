var express = require("express");
var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burgers.js");

var sequelizeConnection = models.sequelize;

sequelizeConnection.sync();

// Create all our routes and set up logic within those routes where required.

router.get('/',function(req,res){
    res.redirect('/index');
models.burgers.findAll( {
    include:[{model:models.devoured}]
}).then(function(data){
        var hbsObject = {
            burgers: data};
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

router.post("/", function (req, res) {
    models.burger.create(
        {
        burger_name: req.body.burger_name, 
        devoured: 0
    }
    ) .then(function(){
            res.redirect("/");
        });
});

router.put("/:item_id", function (req, res) {
    var condition = "item_id = " + req.params.item_id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function () {
        res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = router;
