import express from "express";

import {
  getUserProfile,
  updateUserProfile,
  getMyOrders,
  deleteMyAccount,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();



/*
|--------------------------------------------------------------------------
| User Profile Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/profile",
  protect,
  getUserProfile
);

router.put(
  "/profile",
  protect,
  updateUserProfile
);

router.delete(
  "/profile",
  protect,
  deleteMyAccount
);



/*
|--------------------------------------------------------------------------
| User Orders
|--------------------------------------------------------------------------
*/

router.get(
  "/orders",
  protect,
  getMyOrders
);



export default router;