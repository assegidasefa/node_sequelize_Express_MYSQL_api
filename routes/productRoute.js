const productController = require("../controllers/productController.js");

const router = require("express").Router();

router.post("/addProduct", productController.addProduct);
router.get("/allProduct", productController.getAllProducts);
router.get("/published", productController.getPublishedProduct);
router.get("/:id", productController.getOneProduct);
router.put("/:id", productController.UpdateProduct);
router.delete("/:id", productController.addProduct);

module.exports = router;
