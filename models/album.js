var db = require('../configDb');

/**
 * Cette fonction recupère l'adresse des photos 1 de chaque vip par ordre alphabétique.
 */
module.exports.photo1 = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE FROM photo p JOIN vip v ON p.VIP_NUMERO = v.VIP_NUMERO WHERE PHOTO_NUMERO = 1 ORDER BY VIP_NOM LIMIT 12 OFFSET 12";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction recupère l'adresse de la première photo du premier VIP.
 */
module.exports.photoPremierVip = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE FROM photo p JOIN vip v ON p.VIP_NUMERO = v.VIP_NUMERO WHERE PHOTO_NUMERO = 1 ORDER BY VIP_NOM LIMIT 1 OFFSET 0";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
