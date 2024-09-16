const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const guitarActions = require("../../controllers/guitarActions");
const userActions = require("../../controllers/userActions");
const typeActions = require("../../controllers/typeActions");
const modeleActions = require("../../controllers/modeleActions");

const middlewares = require("../../services/middleware");

const auth = require("../../services/auth");

// Appeler le middleware sur cette route
// router.get("/guitars", auth.verifyToken, guitarActions.browse);
router.get("/guitars", guitarActions.browse);

router.get("/guitars/:id", guitarActions.read);

router.post(
  "/guitars",
  auth.verifyToken,
  middlewares.uploadPicture,
  guitarActions.add
);

router.get("/users", userActions.browse);
router.post(
  "/users",
  middlewares.verifyFields,
  auth.hashPassword,
  userActions.add
);

router.post("/login", auth.verifyPassword, auth.createToken, userActions.login);

router.get("/types", typeActions.browse);
router.get("/modeles", modeleActions.browse);

/* ************************************************************************* */

module.exports = router;
