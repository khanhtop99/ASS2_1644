var mongoose = require('mongoose');

let MerSchema = mongoose.Schema(
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
var MerModel = mongoose.model('mer', MerSchema, 'mer');
module.exports = MerModel;