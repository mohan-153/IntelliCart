import express from "express";

import {
  getDashboardAnalytics,
} from "../controllers/adminController.js";

const router =
  express.Router();

/*
|--------------------------------------------------------------------------
| ADMIN ANALYTICS
|--------------------------------------------------------------------------
*/

router.get(
  "/analytics",
  getDashboardAnalytics
);

export default router;