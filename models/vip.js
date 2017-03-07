var db = require('../configDb');


module.exports.test = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT COUNT(*) AS NB FROM vip ;";
              // console.log(sql); 
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction recupère la première lettre du nom de chaque VIP.
 */
module.exports.afficherLettres = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT DISTINCT SUBSTR(vip_nom, 1, 1) AS LETTRE FROM vip ORDER BY 1 ;";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction recupère le nom, le prénom et la photo principale du VIP passé en paramètre.
 */
module.exports.afficherVip = function(lettreVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT vip.VIP_NUMERO, VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE FROM vip JOIN photo ON photo.vip_numero = vip.vip_numero WHERE vip_nom LIKE '"+ lettreVip +"%' AND PHOTO_NUMERO = 1";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction récupère la photo principale du VIP passé en paramètre.
 */
module.exports.recupererPhoto = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT PHOTO_ADRESSE FROM photo WHERE VIP_NUMERO=" + numVip + " AND PHOTO_NUMERO = 1";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction récupère les informations principales du VIP passé en paramètre.
 */
module.exports.recupererInfos = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT VIP_NOM, VIP_PRENOM, VIP_SEXE, VIP_NAISSANCE, VIP_TEXTE, NATIONALITE_NOM FROM vip JOIN nationalite ON vip.NATIONALITE_NUMERO = nationalite.NATIONALITE_NUMERO WHERE VIP_NUMERO =" + numVip;
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction récupère les adresses de toutes les photos (sauf la principale) du VIP passé en paramètre.
 */
module.exports.recupererPhotos = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT PHOTO_ADRESSE, PHOTO_SUJET, PHOTO_COMMENTAIRE FROM photo WHERE VIP_NUMERO =" + numVip +" AND PHOTO_NUMERO <> 1";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction vérifie si le VIP passé en paramètre est un acteur.
 */
module.exports.estActeur = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT * FROM acteur WHERE VIP_NUMERO = " + numVip;
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction vérifie si le VIP passé en paramètre est un chanteur.
 */
module.exports.estChanteur = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT * FROM chanteur WHERE VIP_NUMERO = " + numVip;
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction vérifie si le VIP passé en paramètre est un réalisateur.
 */
module.exports.estRealisateur = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT * FROM realisateur WHERE VIP_NUMERO = " + numVip;
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction vérifie si le VIP passé en paramètre est un mannequin.
 */
module.exports.estMannequin = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT * FROM mannequin WHERE VIP_NUMERO = " + numVip;
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction vérifie si le VIP passé en paramètre est un couturier.
 */
module.exports.estCouturier = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT * FROM couturier WHERE VIP_NUMERO = " + numVip;
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction retourne les defiles du VIP passe en parametre.
 */
module.exports.listeDefiles = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT DEFILE_LIEU, DEFILE_DATE, VIP_NOM AS COUTURIER_NOM, VIP_PRENOM AS COUTURIER_PRENOM, VIP_TEXTE AS COUTURIER_DESC, PHOTO_ADRESSE AS COUTURIER_PHOTO, c.VIP_NUMERO AS COUTURIER_NUM FROM defiledans dd JOIN defile d ON d.DEFILE_NUMERO = dd.DEFILE_NUMERO JOIN couturier c ON d.VIP_NUMERO = c.VIP_NUMERO JOIN vip v ON v.VIP_NUMERO = c.VIP_NUMERO JOIN photo p ON p.VIP_NUMERO = c.VIP_NUMERO WHERE dd.VIP_NUMERO = " + numVip + " AND PHOTO_NUMERO = 1";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction permet de savoir si le VIP passé en paramètre est un homme.
 */
module.exports.estHomme = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT VIP_SEXE FROM vip WHERE VIP_NUMERO = " + numVip + " AND VIP_SEXE = 'M'";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction retourne les films (titre, date et réalisateur) dans lesquels le VIP passé en paramètre à joué.
 */
module.exports.films = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT FILM_TITRE, FILM_DATEREALISATION, v.VIP_NOM AS NOM_REAL, v.VIP_PRENOM AS PRENOM_REAL, p.PHOTO_ADRESSE AS PHOTO_REAL, v.VIP_TEXTE AS DESC_REAL, r.VIP_NUMERO AS NUM_REAL FROM joue j JOIN film f ON f.FILM_NUMERO = j.FILM_NUMERO JOIN realisateur r ON r.VIP_NUMERO = f.VIP_NUMERO JOIN vip v ON v.VIP_NUMERO = r.VIP_NUMERO JOIN photo p ON v.VIP_NUMERO = p.VIP_NUMERO WHERE j.VIP_NUMERO = " + numVip + " AND p.PHOTO_NUMERO = 1";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction retourne le ou les mariages d'un VIP.
 */
module.exports.mariages = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT VIP_NOM AS NOM_MARIE, VIP_PRENOM AS PRENOM_MARIE, VIP_TEXTE AS DESC_MARIE, PHOTO_ADRESSE AS PHOTO_MARIE, m.VIP_VIP_NUMERO AS NUM_MARIE, MARIAGE_LIEU, DATE_EVENEMENT, MARIAGE_FIN FROM mariage m JOIN VIP v ON v.VIP_NUMERO = m.VIP_VIP_NUMERO JOIN photo p ON p.VIP_NUMERO = m.VIP_VIP_NUMERO WHERE m.VIP_NUMERO = " + numVip + " AND PHOTO_NUMERO = 1";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction retourne la ou les liaisons d'un VIP.
 */
module.exports.liaisons = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT VIP_NOM AS NOM_AMANT, VIP_PRENOM AS PRENOM_AMANT,VIP_TEXTE AS DESC_AMANT, PHOTO_ADRESSE AS PHOTO_AMANT, VIP_VIP_NUMERO AS NUM_AMANT, DATE_EVENEMENT, LIAISON_MOTIFFIN FROM liaison l JOIN vip v ON l.VIP_VIP_NUMERO = v.VIP_NUMERO JOIN photo p ON p.VIP_NUMERO = l.VIP_VIP_NUMERO WHERE l.VIP_NUMERO = " + numVip + " AND PHOTO_NUMERO = 1";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

/**
 * Cette fonction retourne les albums d'un VIP (pour un chanteur ou une chanteuse)
 */
module.exports.albums = function(numVip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT ALBUM_TITRE, ALBUM_DATE, MAISONDISQUE_NOM FROM composer c JOIN album a ON c.ALBUM_NUMERO = a.ALBUM_NUMERO JOIN maisondisque m ON a.MAISONDISQUE_NUMERO = m.MAISONDISQUE_NUMERO WHERE c.VIP_NUMERO = " + numVip;
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};



