var mongoose = require('mongoose');

let pewpewtoySchema = mongoose.Schema(
    {
        name: {
            type:String,
            required: true
        },
        price: {
            type : Number , 
            required : true,
            min : 1
            
        },
        image: {
            type: String,
            required: true
        }
    }
);

var CarsModel = mongoose.model('car', pewpewtoySchema, 'car');

module.exports = CarsModel;