var toDos = require('../models/todoModel');

module.exports =function(app){
    app.get('/api/setupCartData', function(req, res){
console.log('here');
        var starterCartData = [
            {
                userName: 'Ben',
                item: 'Milk',
                isPurchased: true,
                hasAttachment: true
            },{
                userName: 'Mark',
                item: 'Pencil',
                isPurchased: false,
                hasAttachment: true
            },{
                userName: 'Tom',
                item: 'Apple',
                isPurchased: false,
                hasAttachment: true
            },{
                userName: 'Anthony',
                item: 'Chocolate',
                isPurchased: true,
                hasAttachment: false
            }
        ];

        toDos.create(starterCartData, function(err, results){
            res.send(results);
        });
    });


}