// ////////////////////// L I S T E R     A L B U M S
var model = require("../models/album.js");

module.exports.ListerAlbum = function(request, response){
    //var lettreVip = request.params.lettreVip;
    response.title = 'Album des stars';
    var async = require('async');
    async.parallel([
        function(callback){
            model.photoPremierVip(function(err, result){callback(null, result)});
        },
        function(callback){
            model.photo1(function(err, result){callback(null, result)});
        },
    ],
    function(err, result){
        if (err) {
            console.log(err);
            return;
        }
        response.premierePhoto = result[0][0]; 
        response.photos = result[1]; 
        response.render('listerAlbum', response);
    });
}