var db = require('../configDb');

/**
 * Cette fonction recupère le nom et le prenom de toutes les vips.
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

/**
 * Cette fonction recupère les articles du VIP passé en paramètre.
 */
module.exports.getArticlesByVip = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT * FROM article a JOIN apoursujet s ON a.ARTICLE_NUMERO = s.ARTICLE_NUMERO JOIN vip v ON v.VIP_NUMERO = s.VIP_NUMERO WHERE s.VIP_NUMERO = " + numVip;
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};