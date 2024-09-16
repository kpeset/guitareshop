const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const types = await tables.modele.readAll();
    res.json(types);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
