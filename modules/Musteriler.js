var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a schema
var passportLocalMongoose = require('passport-local-mongoose');

var MusteriSchema = new Schema({
    OauthId: String,
    OauthToken: String,
    kurum:  {
        type: String,   
        required: true
    },
    adres:  {
        type: String,
    },
    sehir:{
            type:String,
            required: true
        },
     telno:{
            type:String,
            required: true
        },
        mail:{
            type:String,
            required: true
        },
    password:{
        type:String,
        required:true
    },
     admin:   {
        type: Boolean,
        default: false
    }
    
}, {
    timestamps: true
});
// Will add the Currency type to the Mongoose Schema types
MusteriSchema.plugin(passportLocalMongoose);
// the schema is useless so far
// we need to create a model using it
MusteriSchema.methods.getName = function() {
    return (this.kurum + ' ' + this.password);
};
var Musteri = mongoose.model('Musteri', MusteriSchema);

// make this available to our Node applications
module.exports = Musteri;
