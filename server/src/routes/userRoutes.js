import express from "express";

import {
  getUserProfile,
  updateUserProfile,
  getMyOrders,
  deleteMyAccount,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";
import User from "../models/User.js";

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
| UPDATE ADDRESS
|--------------------------------------------------------------------------
*/

router.put(
  "/profile/:id",
  async (req, res) => {

    try {

      const user =
        await User.findById(
          req.params.id
        );

      if (!user) {

        return res
          .status(404)
          .json({
            message:
              "User not found",
          });

      }

      user.address = {
        fullName:
          req.body.fullName,

        mobile:
          req.body.mobile,

        addressLine:
          req.body.addressLine,

        city:
          req.body.city,

        state:
          req.body.state,

        postalCode:
          req.body.postalCode,

        country:
          req.body.country,
      };

      await user.save();

      res.json({
        message:
          "Address Updated",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  }
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