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

module.exports = { isOpen, isFromLozere };
