const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const guitarActions = require("../../controllers/guitarActions");
const userActions = require("../../controllers/userActions");

const middlewares = require("../../services/middleware");

// Appeler le middleware sur cette route
router.get("/guitars", guitarActions.browse);

router.get("/guitars/:id", guitarActions.read);

router.post("/guitars", middlewares.uploadPicture, guitarActions.add);

router.get("/users", userActions.browse);
router.post("/users", middlewares.verifyFields, userActions.add);

/* ************************************************************************* */

module.exports = router;
