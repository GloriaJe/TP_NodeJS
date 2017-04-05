// ////////////////////// L I S T E R     A L B U M S
var model = require("../models/album.js");
var model1 = require("../models/vip.js");

module.exports.DetailAlbum = function(request, response){
    var numVip = request.params.numVip;
    var indice = parseInt(request.params.indice);
    var numPhoto = parseInt(request.params.numPhoto);
    response.title = 'Album des stars';
    var async = require('async');
    async.parallel([
        function(callback){
            model.getPhotos(numVip, function(err, result){callback(null, result)});
        },
        function(callback){
            model.get12photos(indice*12, function(err, result){callback(null, result)});
        },
        function(callback){
            model.getNbVips(function(err, result){callback(null, result)});
        },
        function(callback){
            model.getNbPhotos(numVip, function(err, result){callback(null, result)});
        }
    ],
    function(err, result){
        if (err) {
            console.log(err);
            return;
        }
        response.photo1 = result[0][0]; 
        response.photosVips = result[0][numPhoto];
        console.log(result[0][numPhoto]);
        response.photos12 = result[1]; 
        
        var nbVips = result[2][0].nbVips;

        response.indiceCourant = indice;
        response.indiceSuivant = ((indice + 1) > ((parseInt(nbVips)%12) +2) ? (indice) : (indice + 1));
        response.indicePrecedent = (indice - 1) < 0 ? 0 : (indice - 1);
        response.indiceFin = (parseInt(nbVips) % 12) + 2;

        var nbPhotos = result[3][0].nbPhotos;
        response.photoCourante = numPhoto;
        response.photoSuivante = ((numPhoto + 1 > (parseInt(nbPhotos) - 1) ? (numPhoto) : (numPhoto + 1)));
        response.photoPrecedente = (numPhoto - 1) < 0 ? 0 : (numPhoto - 1);

        response.vipCourant = numVip;
        
        response.render('detailAlbum', response);
    });
}

