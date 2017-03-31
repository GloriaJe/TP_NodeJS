
var model = require("../models/vip.js");

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

module.exports.Repertoire = 	function(request, response){
    response.title = 'Répertoire des stars';
    model.afficherLettres(function(err, result){  // appel le module test qui exécute la requete SQL
      if (err) {
          console.log(err);
          return;
      }
      response.lettre = result; 
      response.render('repertoireVips', response);
    }) ;
}

module.exports.ResultatLettre = function(request, response){
    var lettreVip = request.params.lettreVip;
    response.title = 'Répertoire des stars';
    var async = require('async');
    async.parallel([
        function(callback){
            model.afficherLettres(function(err, result){callback(null, result)});
        },
        function(callback){
            model.afficherVip(lettreVip, function(err, result){callback(null, result)});
        },
    ],
    function(err, result){
        if (err) {
            console.log(err);
            return;
        }
        response.lettre = result[0]; 
        response.noms = result[1]; 
        response.render('nomsVip', response);
    });
}


module.exports.Informations = function(request, response){
    var numVip = request.params.numVip;
    response.title = 'Photo';
    var async = require('async');
    async.parallel([
        function(callback){
            model.afficherLettres(function(err, result){callback(null, result)});
        },
        function(callback){
            model.recupererPhoto(numVip, function(err, result){callback(null, result)});
        },
        function(callback){
            model.recupererInfos(numVip, function(err, result){callback(null, result)});
        },
        function(callback){
            model.recupererPhotos(numVip, function(err, result){callback(null, result)});
        },
        function(callback){
            model.estMannequin(numVip, function(err, result){callback(null, result)});
        },
        function(callback){
            model.estChanteur(numVip, function(err, result){callback(null, result)});
        },
        function(callback){
            model.estActeur(numVip, function(err, result){callback(null, result)});
        },
        function(callback){
            model.estRealisateur(numVip, function(err, result){callback(null, result)});
        },
        function(callback){
            model.estCouturier(numVip, function(err, result){callback(null, result)});
        },
        function(callback){
            model.estHomme(numVip, function(err, result){callback(null, result)});
        },
        function(callback){
            model.films(numVip, function(err, result){callback(null, result)});
        },
        function(callback){
            model.listeDefiles(numVip, function(err, result){callback(null, result)});
        },
        function(callback){
            model.mariages(numVip, function(err, result){callback(null, result)});
        },        
        function(callback){
            model.liaisons(numVip, function(err, result){callback(null, result)});
        },
        function(callback){
            model.albums(numVip, function(err, result){callback(null, result)});
        },
    ],
    function(err, result){
        if (err) {
            console.log(err);
            return;
        }
        response.lettre      = result[0]; 
        response.photo       = result[1][0];
        response.infos       = result[2][0];
        response.photos      = result[3];
        response.mannequin   = result[4][0];
        response.chanteur    = result[5][0];
        response.acteur      = result[6][0];
        response.realisateur = result[7][0];
        response.couturier   = result[8][0];
        response.homme       = result[9][0];
        response.films       = result[10];
        response.defiles     = result[11];
        response.mariages    = result[12];
        response.liaisons    = result[13];
        response.albums      = result[14];
        response.render('infosVip', response);
    });
}
