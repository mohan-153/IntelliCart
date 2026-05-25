import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import flashSaleRoutes from "./routes/flashSaleRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/flash-sale",
  flashSaleRoutes
);

app.use(
  "/api/orders",
   orderRoutes);

