const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const { browse, read } = require("../../controllers/guitarActions");

router.get("/guitars", browse);
router.get("/guitars/:id", read);

/* ************************************************************************* */

module.exports = router;
