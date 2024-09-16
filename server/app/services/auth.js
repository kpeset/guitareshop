const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const hashedPassword = await argon2.hash(password, hashingOptions);

    delete req.body.password;

    req.body.hashedPassword = hashedPassword;

    console.info(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

const verifyPassword = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await tables.user.readByEmail(email);

    if (!user) {
      res.sendStatus(401);
    }

    req.user = {
      id: user.id,
      email: user.email,
    };

    console.info(req.user);

    const verified = await argon2.verify(user.password, password);

    if (!verified) {
      res.sendStatus(401);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const createToken = async (req, res, next) => {
  try {
    const payload = req.user;

    // jwt.sign(payload, secretOrPrivateKey, [options, callback])

    const token = await jwt.sign(payload, process.env.APP_SECRET, {
      expiresIn: "1y",
    });

    req.token = token;

    next();
  } catch (error) {
    next(error);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const { auth } = req.cookies;
    console.info(auth);

    // Pour tout faire d'un coup
    // jwt.verify(
    //   authTokenWildApp,
    //   process.env.APP_SECRET,
    //   (err, decoded) => {}

    const result = await jwt.verify(auth, process.env.APP_SECRET);
    console.info(result);

    next();
  } catch (error) {
    next(error);
  }
};
// const checkIfIsAdmin = () => {
//   // decoder le token => vérifier si il est authentique
//   // on accède au payload pour voir le role
//   // si le role est admin => next
//   // sinon error 401
// }

module.exports = { hashPassword, verifyPassword, createToken, verifyToken };
// jwt.verify(token, secretOrPublicKey, [options, callback])
