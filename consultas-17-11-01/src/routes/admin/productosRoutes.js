const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const { body } = require("express-validator");

const validations = [
  body("nombre")
    .not()
    .isEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Tiene que tener 3 caracteres"),
  body("precio").not().isEmpty().withMessage("El precio es obligatorio"),
];

const controller = require("../../controllers/admin/productoController");

// CRUD = Create, Read, Update, Delete

router.get("/", controller.index);

router.get("/create", controller.create);
router.post("/", upload.single("imagen"), validations, controller.store);

router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;
