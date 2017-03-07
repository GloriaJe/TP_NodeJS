var model = require("../models/article.js");

module.exports.ListerVips = 	function(request, response){
    response.title = 'Noms des vips';
    model.vips(function(err, result){  // appel le module test qui exécute la requete SQL
      if (err) {
          console.log(err);
          return;
      }
      response.vips = result; 
      response.render('articleChoixVip', response);
    }) ;
}

module.exports.articlesVip = function(request, response){
    var numVip = request.params.numVip;
    response.title = 'Articles';
    var async = require('async');
    async.parallel([
        function(callback){
            model.getArticlesByVip(numVip, function(err, result){callback(null, result)});
        },
        function(callback){
            model.vips(function(err, result){callback(null, result)});
        },
    ],
    function(err, result){
        if (err) {
            console.log(err);
            return;
        }
        response.articles = result[0]; 
        response.vips = result[1];
        response.render('articles', response);
    });
}