// ////////////////////// L I S T E R     A L B U M S
var model = require("../models/album.js");
var model1 = require("../models/vip.js");

module.exports.ListerAlbum = function(request, response){
    response.title = 'Album des stars';
    model.adressePhoto1(function(err, result){  
      if (err) {
          console.log(err);
          return;
      }
      response.photos = result; 
      response.render('listerAlbum', response);
    }) ;
}

module.exports.DetailAlbum = function(request, response){
    var numVip = request.params.numVip;
    response.title = 'Album des stars';
    var async = require('async');
    async.parallel([
        function(callback){
            model.getPhotos(numVip, function(err, result){callback(null, result)});
        },
        function(callback){
            model.photo1tab(function(err, result){callback(null, result)});
        },
    ],
    function(err, result){
        if (err) {
            console.log(err);
            return;
        }
        response.photo1 = result[0][0]; 
        response.photosVips = result[0];
        response.photos = result[1]; 
        response.render('detailAlbum', response);
    });
}

