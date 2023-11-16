const express = require("express");
const router = express.Router();

const controller = require("../controllers/tareasController");

router.get("/", controller.index);
router.post("/", controller.store);

module.exports = router;
