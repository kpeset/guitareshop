const Joi = require("joi");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const path = require("path");

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

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename(req, file, cb) {
    const id = uuidv4();
    const pictureName = `${id}${path.extname(file.originalname)}`;
    req.body.image = pictureName;
    cb(null, pictureName);
  },
});

const uploadPicture = (req, res, next) => {
  const upload = multer({ storage });
  return upload.single("image")(req, res, next);
};

module.exports = { isOpen, isFromLozere, verifyFields, uploadPicture };
