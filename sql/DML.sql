INSERT INTO `usuarios` (`id`, `usuario`, `imagen`, `nombre`, `edad`, `deleted_at`) 
VALUES (null, 'User 1', 'imagen1.jpg', 'Juan', 33, null);

INSERT INTO `usuarios` (`usuario`, `nombre`, `edad`) 
VALUES ('User 2', 'Maria', 30);

INSERT INTO `usuarios` VALUES (null, 'User 4', null, 'Pedro', 43, '2023-10-12');

INSERT INTO `usuarios` (`usuario`, `nombre`, `edad`) 
VALUES ('User 5', 'Pablo', 20), ('User 6', 'Ana', 21);

---

SELECT * FROM `usuarios`;

SELECT id, usuario, edad FROM `usuarios`;

SELECT id, usuario, edad 
FROM `usuarios`
WHERE edad >= 30;

SELECT * FROM `usuarios` LIMIT 2, 2;

SELECT * FROM `usuarios` WHERE nombre LIKE '%ri%';

SELECT * FROM `usuarios` ORDER by edad DESC;

---

UPDATE `usuarios` 
SET imagen = 'imagen2.jpg', deleted_at = '2023-01-01'
WHERE id = 5;

---

DELETE FROM `usuarios` 
WHERE deleted_at IS NOT NULL;

---

SELECT productos.id, productos.nombre AS producto, precio, categorias.nombre AS categoria
FROM `productos`
INNER JOIN categorias ON categorias.id = productos.categoria_id;