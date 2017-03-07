
// ////////////////////// L I S T E R     A L B U M S
var model = require("../models/vip.js");

module.exports.ListerAlbum = 	function(request, response){
   response.title = 'Album des stars';
   response.render('listerAlbum', response);
} ;
