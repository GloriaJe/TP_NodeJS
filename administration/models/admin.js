var db = require('../configDb');

module.exports.connect = function(login, password, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT COUNT(*) AS nb FROM parametres WHERE LOGIN='" + login +  "' AND PASSWD='" + password + "'";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};