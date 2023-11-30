const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const validations = [
  body("nombre")
    .not()
    .isEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Tiene que tener 3 caracteres"),
];

const controller = require("../../controllers/admin/categoriasController");

// CRUD = Create, Read, Update, Delete

router.get("/", controller.index);

router.get("/create", controller.create);
router.post("/", validations, controller.store);

router.get("/:id/edit", controller.edit);
router.put("/:id", validations, controller.update);

router.delete("/:id", controller.destroy);

module.exports = router;
