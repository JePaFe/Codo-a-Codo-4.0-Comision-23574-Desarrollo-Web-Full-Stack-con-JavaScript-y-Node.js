const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/productosController");

// CRUD = Create, Read, Update, Delete

router.get("/", controller.index);
router.post("/", controller.store);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;
