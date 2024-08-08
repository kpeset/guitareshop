const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const guitars = await tables.guitar.readAll();

    if (guitars.length === 0) {
      res.json({
        message: "Pas de guitares",
        result: guitars,
      });
    } else {
      res.json({ result: guitars });
    }
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const guitar = await tables.guitar.read(req.params.id);

    if (!guitar.length) {
      res.status(404).send("Aucun résultat");
    } else {
      res.json(guitar);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read };
