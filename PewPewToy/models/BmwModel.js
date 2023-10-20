var mongoose = require('mongoose');

let BmwSchema = mongoose.Schema(
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
var BmwModel = mongoose.model('bmw', BmwSchema, 'bmw');
module.exports = BmwModel;