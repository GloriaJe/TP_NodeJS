var async = require('async');
var crypto = require('crypto');
var model = require('../models/admin.js');

module.exports.Connexion = function(request, response){
    response.title = "Admin";

    var login = request.body.login;
    var password = request.body.password;
    var passwordCrypt = crypto.createHash('sha256').update(password).digest('hex');

    model.connect(login, passwordCrypt, function(err, result){
        if (err) {
            console.log(err);
            return;
        }

        response.estConnecte = result[0];

        if(result[0].nb == 1 || request.session.login != null){
            request.session.login = login;
            request.app.locals.layout = 'main';
            response.render('administration', response);
        }
        else {
            request.app.locals.layout = 'admin';
            response.render('connexion', response);
        }
    });
};

module.exports.Deconnexion = function(request, response){
    response.title = "Deconnexion";

    request.session.destroy;
}