var ConnexionController = require('./../controllers/ConnexionController');
var VipController = require('./../controllers/VipController');
var PhotoController = require('./../controllers/PhotoController');
var HomeController = require('./../controllers/HomeController');

//const bodyParser = require('body-parser');

// Routes
module.exports = function(app){
    //app.use(bodyParser.urlencoded({ extended : false }));

    // Main Routes
    app.get('/', ConnexionController.Index);

    // Accueil suivant la connexion
    app.post('/home', HomeController.Connexion);

    // FVIPS
    app.get('/vips', VipController.AjouterVip);
    app.post('/vips/ajouter', VipController.SetVip);

    // PHOTOS
    app.get('/photos', PhotoController.AjouterPhoto);
    app.post('/photos/ajouter', PhotoController.SetPhoto);

    // Tout le reste
    app.get('*', ConnexionController.Index);
    app.post('*', ConnexionController.Index);

};
