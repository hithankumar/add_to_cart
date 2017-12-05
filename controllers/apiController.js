var todos = require('../models/todoModel'); //mongoose model
var bodyParser = require('body-parser'); //middleware

module.exports = function(app){
    //middleware to parse our json request from body
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/api/getCartData/:userName', function(req, res){
        todos.find({
            userName: req.params.userName
        }, function(err, todos){
            if(err)
                throw err;
            res.send(todos);
        });
    });

    app.get('/api/getCartDataById/:id', function(req,res){
        todos.findById({
            _id: req.params.id
        }, function(err, todos){
            if(err)
                throw err;
            res.send(todos);
        });
    });

    app.post('/api/addCartData', function(req,res){
        if(req.body.id){
            //its an update of cart data cos id exists
            todos.findByIdAndUpdate(req.body.id, {
                item: req.body.item,
                isPurchased : req.body.isPurchased,
                hasAttachment: req.body.hasAttachment
            }, function(err, todos){
                if(err)
                    throw err;
                res.send("Successfully updated"); 
            });
        }else{
            //its an insert operation
            var newCartItem = todos({
                userName: 'test',
                item: req.body.item,
                isPurchased: req.body.isPurchased,
                hasAttachment: req.body.hasAttachment
            });
            newCartItem.save(function(err){
                if(err)
                    throw err;
                res.send("Successfully added item");
            })
        }
    });

    app.delete('/api/removeCartItem', function(req,res){
        todos.findByIdAndRemove(req.body.id, function(err){
            if(err)
                throw err;
            res.send("Removed successfully");
        });
    });
}