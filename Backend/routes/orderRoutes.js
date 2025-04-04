// Shree Ganeshay Namah

const express = require("express");
const { 
  allOrders, 
  updateStatus, 
  placeOrder, 
  placeOrderStripe, 
  placeOrderRazorpay, 
  userOrders, 
  verifyStripe 
} = require("../controllers/order.controller");
const { adminAuth } = require("../middleware/adminAuth");
const { authUser } = require("../middleware/auth");

const orderRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order and payment management
 */

/**
 * @swagger
 * /api/orders/list:
 *   post:
 *     summary: Get all orders (Admin Only)
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of all orders retrieved successfully
 */
orderRouter.post("/list", adminAuth, allOrders);

/**
 * @swagger
 * /api/orders/status:
 *   post:
 *     summary: Update order status (Admin Only)
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Order status updated successfully
 */
orderRouter.post("/status", adminAuth, updateStatus);

/**
 * @swagger
 * /api/orders/place:
 *   post:
 *     summary: Place an order
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                     quantity:
 *                       type: integer
 *               totalPrice:
 *                 type: number
 *     responses:
 *       201:
 *         description: Order placed successfully
 */
orderRouter.post("/place", authUser, placeOrder);

/**
 * @swagger
 * /api/orders/stripe:
 *   post:
 *     summary: Place an order using Stripe
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Stripe order placed successfully
 */
orderRouter.post("/stripe", authUser, placeOrderStripe);

/**
 * @swagger
 * /api/orders/razorpay:
 *   post:
 *     summary: Place an order using Razorpay
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Razorpay order placed successfully
 */
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

/**
 * @swagger
 * /api/orders/verifyStripe:
 *   post:
 *     summary: Verify Stripe payment
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Stripe payment verified successfully
 */
orderRouter.post("/verifyStripe", authUser, verifyStripe);

/**
 * @swagger
 * /api/orders/userorders:
 *   post:
 *     summary: Get all orders of a user
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of user orders retrieved successfully
 */
orderRouter.post("/userorders", authUser, userOrders);

module.exports = orderRouter;
