const express = require("express");
const router = express.Router();

const controller = require("../controllers/mainController");

router.get("/", controller.index);
router.get("/shop", controller.shop);

router.get("/cart/:id/add", controller.addCart);

module.exports = router;
