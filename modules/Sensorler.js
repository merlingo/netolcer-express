var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var veriSchema = new Schema({
    deger:{
        type:Number,
        required: true
    },
    Tip { 
        type:String,
        required: true
},
    Birim {
            type:String,
            required: true
                            },
    date  :  { type: Date, default: Date.now }
});
// create a schema
var SensorSchema = new Schema({
        dl_id:{
            type:String,
            required: true
        },
        ad:{
            type:String,
            required: true
        },
        index:{
            type:Number,
            required: true
},
        tip:{
            type:String,
            required: true,
            lowercase:true,
},
        veriler:[veriSchema],
    }, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Sensorler = mongoose.model('Sensor', SensorSchema);

// make this available to our Node applications
module.exports = Sensorler;