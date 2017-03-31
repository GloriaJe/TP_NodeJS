var HomeController = require('./../controllers/HomeController');
var VipController = require('./../controllers/VipController');
var PhotoController = require('./../controllers/PhotoController');

// Routes
module.exports = function(app){

    // Main Routes
    app.get('/', HomeController.Index);

    // VIPS
    app.get('/vips', VipController.AjouterVip);
    // PHOTOS
    app.get('/photos', PhotoController.AjouterPhoto);
    //app.get('/photos', PhotoController.AjouterPhoto);

};
