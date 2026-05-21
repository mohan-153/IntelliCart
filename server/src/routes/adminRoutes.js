import express from "express";

import {
  getDashboardStats,
  getAllUsers,
  deleteUser,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/adminController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminProtect } from "../middleware/adminMiddleware.js";

const router = express.Router();



/*
|--------------------------------------------------------------------------
| Dashboard Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/dashboard",
  protect,
  adminProtect,
  getDashboardStats
);



/*
|--------------------------------------------------------------------------
| User Management Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/users",
  protect,
  adminProtect,
  getAllUsers
);

router.delete(
  "/users/:id",
  protect,
  adminProtect,
  deleteUser
);



/*
|--------------------------------------------------------------------------
| Order Management Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/orders",
  protect,
  adminProtect,
  getAllOrders
);

router.put(
  "/orders/:id",
  protect,
  adminProtect,
  updateOrderStatus
);



export default router;