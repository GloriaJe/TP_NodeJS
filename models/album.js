var db = require('../configDb');

/**
 * Cette fonction recupère les albums des vips.
 */
module.exports.vips = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT DISTINCT VIP_NUMERO, VIP_PRENOM, VIP_NOM FROM VIP ORDER BY VIP_NOM;";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
