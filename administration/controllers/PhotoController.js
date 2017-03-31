var model = require("../models/photo.js");


module.exports.AjouterPhoto = 	function(request, response){
    response.title = 'Ajouter une photo';
    response.render('ajouterPhoto', response);
}

