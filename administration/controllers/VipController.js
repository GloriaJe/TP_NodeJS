
var model = require("../models/vip.js");

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

module.exports.AjouterVip = 	function(request, response){
    response.title = 'Ajouter un Vip';
    response.render('ajouterVip', response);
}


