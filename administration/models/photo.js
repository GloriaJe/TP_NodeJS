var db = require('../configDb');

/*
* Cette fonction permet d'ajouter une photo à un vip
*/
module.exports.ajouter = function(vipnum, titre, commentaire, adresse, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "INSERT INTO photo VALUES('"+vipNum+"', '"+titre+"', "+commentaire+"', "+adresse+"')";
            console.log(sql); 
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/*
* Cette fonction permet de récupérer le nom et le prénom de tous les vips
*/
module.exports.getNomPrenomVips = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT VIP_NOM, VIP_PRENOM FROM VIP ORDER BY VIP_NOM";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/*
* Cette fonction permet de récupérer le numéro d'un vip à partir de son nom
*/
module.exports.getNumVipByNomVip = function(nomVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT VIP_NUM FROM VIP WHERE NOM_VIP =" + nomVip;
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};