var mongoose = require('mongoose');

let MgSchema = mongoose.Schema(
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
var MgModel = mongoose.model('mg', MgSchema, 'mg');
module.exports = MgModel;