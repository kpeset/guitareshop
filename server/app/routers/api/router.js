const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const { browse, read, add } = require("../../controllers/guitarActions");

const { isOpen, isFromLozere } = require("../../services/middleware");

// Appeler le middleware sur cette route
router.get("/guitars", isFromLozere, isOpen, browse);

router.get("/guitars/:id", read);

router.post("/guitars", add);

/* ************************************************************************* */

module.exports = router;
