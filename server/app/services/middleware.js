const Joi = require("joi");

const isFromLozere = (req, res, next) => {
  const lozerian = false;

  if (!lozerian) {
    res.status(401).send("Sorry bro tu n'es pas de la Lozère");
  } else {
    next();
  }
};

const isOpen = (req, res, next) => {
  const now = new Date().getHours();

  const openingHour = 9;
  const closingHour = 17;

  if (now >= openingHour && now < closingHour) {
    next();
  } else {
    res.status(401).send("Magasin fermé");
  }
};

const verifyFields = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const result = schema.validate(req.body);

  if (result.error) {
    res.status(400).send(result.error.message);
  } else {
    next();
  }
};

module.exports = { isOpen, isFromLozere, verifyFields };
