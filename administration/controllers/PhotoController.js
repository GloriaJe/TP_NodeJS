var model = require("../models/photo.js");


module.exports.AjouterPhoto = 	function(request, response){
    response.title = 'Ajouter une photo';
    var async = require('async');
    async.parallel([
        function(callback){
            model.getNomPrenomVips(function(err, result){callback(null, result)});
        },

    ],
    function(err, result){
        if (err) {
            console.log(err);
            return;
        }
        response.nomsPrenomsVips = result[0]; 
        response.render('ajouterPhoto', response);
    });
}

module.exports.SetPhoto = 	function(request, response){
    var titre = request.body.titre;
    var img = request.body.img;
    var nomVip = request.body.vip;
    var comment = request.body.comment;
    var numVip = 1;
    console.log(titre);
    console.log(img);
    console.log(nomVip);
    response.title = 'Photo ajoutée';
    var async = require('async');
    async.parallel([
        function(callback){
            model.getNumVipByNomVip(function(numVip, err, result){callback(null, result)});
        },
        function(callback){
            model.ajouter(function(numVip, titre, comment, img, err, result){callback(null, result)});
        },

    ],
    function(err, result){
        if (err) {
            console.log(err);
            return;
        }
        response.numVip = result[0][0]; 
        response.res = result[1];
        response.render('validationAjout', response);
    });
}

