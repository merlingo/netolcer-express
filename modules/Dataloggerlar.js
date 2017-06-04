//içinde sensör listesi ve müsteri id olan dataloggerlardır.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a schema
var DLSchema = new Schema({
        kurum_id:{
            type:String,
            required: true
        },
        ad:{
            type:String,
            required: true
},
        sensorSayisi:{
            type:String,
            required: true
},
        telefonNumarasi:{
            type:String,
            required: true
        },
    sonKalibrasyonTarihi:{
        type:String,
        required:true
    }
    
    }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var DataLoggerlar = mongoose.model('DataLogger', DLSchema);

// make this available to our Node applications
module.exports = DataLoggerlar;