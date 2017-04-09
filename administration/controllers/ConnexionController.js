

  // ////////////////////////////////////////////// A C C U E I L
module.exports.Index = function(request, response){
    request.app.locals.layout="main";
    response.title = "Connexion";
    response.render('connexion', response);
};
