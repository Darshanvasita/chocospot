// Shree Ganeshay Namah

const express = require("express");
const { addToCart, updateCart, getUserCart } = require("../controllers/cart.controller");
const { authUser } = require("../middleware/auth");

const cartRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart management API
 */

/**
 * @swagger
 * /api/cart/get:
 *   post:
 *     summary: Get the current user's cart
 *     tags: [Cart]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Returns the user's cart
 */
cartRouter.post("/get", authUser, getUserCart);

/**
 * @swagger
 * /api/cart/add:
 *   post:
 *     summary: Add an item to the cart
 *     tags: [Cart]
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
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Item added to the cart successfully
 */
cartRouter.post("/add", authUser, addToCart);

/**
 * @swagger
 * /api/cart/update:
 *   post:
 *     summary: Update cart items
 *     tags: [Cart]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cartId:
 *                 type: string
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Cart updated successfully
 */
cartRouter.post("/update", authUser, updateCart);

module.exports = cartRouter;
