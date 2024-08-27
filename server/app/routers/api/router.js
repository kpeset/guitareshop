const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const { browse, read, add } = require("../../controllers/guitarActions");

// Appeler le middleware sur cette route
router.get("/guitars", browse);

router.get("/guitars/:id", read);

router.post("/guitars", add);

// post = C ; get = R ; put = U ; delete = D

/* ************************************************************************* */

module.exports = router;
