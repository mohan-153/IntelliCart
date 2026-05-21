import express from "express";

import {
  cashOnDelivery,
  onlinePayment,
  getPaymentDetails,
} from "../controllers/paymentController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();



/*
|--------------------------------------------------------------------------
| Cash On Delivery
|--------------------------------------------------------------------------
*/

router.post(
  "/cod",
  protect,
  cashOnDelivery
);



/*
|--------------------------------------------------------------------------
| Online Payment
|--------------------------------------------------------------------------
*/

router.post(
  "/online",
  protect,
  onlinePayment
);



/*
|--------------------------------------------------------------------------
| Payment Details
|--------------------------------------------------------------------------
*/

router.get(
  "/:id",
  protect,
  getPaymentDetails
);



export default router;