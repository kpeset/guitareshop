const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();

    if (users.length) {
      res.json({ result: users });
    } else {
      res.json({ message: "Aucun utilisateur", result: users });
    }
    console.info(users);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const result = await tables.user.create(req.body);

    res.status(201).send(`Utilisateur ${result.insertId} ajouté avec succès`);
  } catch (error) {
    next(error);
  }
};

// FORMULAIRE D'INSCRIPTION :
// Savoir si un email existe
// Savoir si il y a un @ .fr

// Vérifier la longueur du mdp
// Inclure des regex -> expressions régulières

module.exports = { browse, add };
