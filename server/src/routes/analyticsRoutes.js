import express from "express";

import {
  getSalesAnalytics,
  getTopProducts,
  getUserAnalytics,
  getRevenueAnalytics,
} from "../controllers/analyticsController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminProtect } from "../middleware/adminMiddleware.js";

const router = express.Router();



/*
|--------------------------------------------------------------------------
| Sales Analytics
|--------------------------------------------------------------------------
*/

router.get(
  "/sales",
  protect,
  adminProtect,
  getSalesAnalytics
);



/*
|--------------------------------------------------------------------------
| Product Analytics
|--------------------------------------------------------------------------
*/

router.get(
  "/top-products",
  protect,
  adminProtect,
  getTopProducts
);



/*
|--------------------------------------------------------------------------
| User Analytics
|--------------------------------------------------------------------------
*/

router.get(
  "/users",
  protect,
  adminProtect,
  getUserAnalytics
);



/*
|--------------------------------------------------------------------------
| Revenue Analytics
|--------------------------------------------------------------------------
*/

router.get(
  "/revenue",
  protect,
  adminProtect,
  getRevenueAnalytics
);



export default router;