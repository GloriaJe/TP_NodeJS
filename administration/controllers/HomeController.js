var db = require('../configDb');
var async = require('async');
var crypto = require('crypto');

module.exports.Admin = function(request, response){
    response.title = "Admin";

    var login = request.body.login;
    var password = request.body.password;
    var passwordCrypt = crypto.createHash('sha256').update(password).digest('hex');
    console.log(passwordCrypt);

    model.connexion(login, passwordCrypt, function(err, result){
        if (err) {
            console.log(err);
            return;
        }
    });
};