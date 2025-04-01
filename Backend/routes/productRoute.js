// Shree Ganeshay Namah

const express = require("express");
const productController = require("../controllers/product.controller");
const upload = require("../middleware/multer");
const { adminAuth } = require("../middleware/adminAuth");

const productRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management
 */

/**
 * @swagger
 * /api/products/add:
 *   post:
 *     summary: Add a new product (Admin Only)
 *     tags: [Products]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               image1:
 *                 type: string
 *                 format: binary
 *               image2:
 *                 type: string
 *                 format: binary
 *               image3:
 *                 type: string
 *                 format: binary
 *               image4:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Product added successfully
 *       400:
 *         description: Invalid request
 */
productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  productController.addProduct
);

/**
 * @swagger
 * /api/products/remove:
 *   post:
 *     summary: Remove a product (Admin Only)
 *     tags: [Products]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product removed successfully
 *       404:
 *         description: Product not found
 */
productRouter.post("/remove", adminAuth, productController.removeProduct);

/**
 * @swagger
 * /api/products/single:
 *   post:
 *     summary: Get details of a single product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product details returned
 *       404:
 *         description: Product not found
 */
productRouter.post("/single", productController.singleProduct);

/**
 * @swagger
 * /api/products/list:
 *   get:
 *     summary: Get list of all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products returned successfully
 */
productRouter.get("/list", productController.listProduct);

module.exports = productRouter;
