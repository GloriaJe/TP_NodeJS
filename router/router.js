var HomeController = require('./../controllers/HomeController');
var VipController = require('./../controllers/VipController');
var AlbumController = require('./../controllers/AlbumController');
var TestController = require('./../controllers/TestController');
var ArticleController = require('./../controllers/ArticleController');

// Routes
module.exports = function(app){

// tests à supprimer
app.get('/test', TestController.Test);

// Main Routes
app.get('/', HomeController.Index);

// VIP
app.get('/repertoire', VipController.Repertoire);
//récupère la lettre passé en param dans l'adresse
app.get('/repertoire/:lettreVip', VipController.ResultatLettre);
//recupère le numero du VIP passé en param dans l'adresse
app.get('/repertoire/vip/:numVip', VipController.Informations);

// albums
app.get('/album/', AlbumController.ListerAlbum);
//récupère le num du vip passé en param dans l'adresse
app.get('/album/:numVip', AlbumController.DetailAlbum);

// articles
app.get('/articles', ArticleController.ListerVips);
app.get('/articles/:numVip', ArticleController.articlesVip);

// tout le reste
app.get('*', HomeController.Index);
app.post('*', HomeController.Index);

};
