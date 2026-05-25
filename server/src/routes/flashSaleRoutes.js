import express from "express";

import FlashSale from "../models/FlashSale.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| GET FLASH SALE
|--------------------------------------------------------------------------
*/

router.get("/", async (req, res) => {

  const sale =
    await FlashSale.findOne();

  res.json(sale);

});

/*
|--------------------------------------------------------------------------
| CREATE / UPDATE FLASH SALE
|--------------------------------------------------------------------------
*/

router.post("/", async (req, res) => {

  const { hours } = req.body;

  let sale =
    await FlashSale.findOne();

  if (sale) {

    sale.hours = hours;

    sale.active = true;

    sale.createdAt =
      new Date();

    await sale.save();

  } else {

    sale =
      await FlashSale.create({
        hours,
      });

  }

  res.json(sale);

});

/*
|--------------------------------------------------------------------------
| STOP FLASH SALE
|--------------------------------------------------------------------------
*/

router.put("/stop", async (req, res) => {

  const sale =
    await FlashSale.findOne();

  if (sale) {

    sale.active = false;

    await sale.save();

  }

  res.json({
    message:
      "Flash Sale Stopped",
  });

});

export default router;