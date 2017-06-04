var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Musteriler = require('../modules/Musteriler');
var passport = require('passport');
var musteriRouter = express.Router();
var Verify    = require('./verify');

musteriRouter.use(bodyParser.json()); // if body of the request in form json, then parse it
musteriRouter.get('/facebook', passport.authenticate('facebook'),
  function(req, res){});
musteriRouter.get('/facebook/callback', function(req,res,next){
  passport.authenticate('facebook', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
              var token = Verify.getToken(user);
              res.status(200).json({
        status: 'Login successful!',
        success: true,
        token: token
      });
    });
  })(req,res,next);
});
musteriRouter.route('/')
.get(Verify.verifyAdmin,function (req, res, next) {
    //musteri bilgiler
    Musteriler.find({}, function (err, musteri) {
        if (err) throw err;
        res.json(musterimusteri);
    });
});

musteriRouter.route('/:kurumid')
.get(function (req, res, next) {
    Musteriler.findById(Verify.verifyAdmin,req.params.kurumid, function (err, musteri) {
        if (err) throw err;
        res.json(musteri);
    });
})

.put(function (req, res, next) {
    Musteriler.findByIdAndUpdate(req.params.kurumid, {
        $set: req.body
    }, {
        new: true
    }, function (err, musteri) {
        if (err) throw err;
        res.json(musteri);
    });
})

.delete(function (req, res, next) {
    Dishes.findByIdAndRemove(Verify.verifyAdmin,req.params.kurumid, function (err, resp) {       
        if (err) throw err;
        res.json(resp);
    });
});


module.exports = musteriRouter;