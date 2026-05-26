import express from "express";

import {
  createOrder,
  getOrders,
} from "../controllers/orderController.js";

const router = express.Router();

router.post(
  "/buy-now",
  createOrder
);

router.get(
  "/:userId",
  getOrders
);

export default router;