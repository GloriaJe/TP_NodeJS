var db = require('../configDb');

/**
 * Cette fonction recupère l'adresse des photos 1 de chaque vip par ordre alphabétique.
 */
module.exports.adressePhoto1 = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT VIP_NOM, VIP_PRENOM, v.VIP_NUMERO, PHOTO_ADRESSE FROM photo p JOIN vip v ON p.VIP_NUMERO = v.VIP_NUMERO WHERE PHOTO_NUMERO = 1 ORDER BY VIP_NOM LIMIT 12 OFFSET 1";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction recupère l'adresse de la première photo du VIP passé en paramètre.
 */
module.exports.getPhoto1 = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT PHOTO_ADRESSE FROM PHOTO WHERE VIP_NUMERO = " + numVip + " ORDER BY PHOTO_NUMERO ASC";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction recupère l'adresse de toutes les photos du VIP passé en paramètre.
 */
module.exports.getPhotos = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE FROM photo p JOIN vip v ON p.VIP_NUMERO = v.VIP_NUMERO WHERE PHOTO_NUMERO = 1 AND v.VIP_NUMERO = " + numVip;
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
