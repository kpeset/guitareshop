const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const { readGuitarList } = require("../../controllers/guitarActions");
const { readCustomer } = require("../../controllers/customerActions");

router.get("/guitars", readGuitarList);
router.get("/customers", readCustomer);

/* ************************************************************************* */

module.exports = router;
