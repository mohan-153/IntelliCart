import API from "./axios";



/*
|--------------------------------------------------------------------------
| CREATE ORDER
|--------------------------------------------------------------------------
*/

export const createOrder =
  async (paymentMethod) => {
    const { data } =
      await API.post(
        "/orders",
        {
          paymentMethod,
        }
      );

    return data;
  };



/*
|--------------------------------------------------------------------------
| GET MY ORDERS
|--------------------------------------------------------------------------
*/

export const getMyOrders =
  async () => {
    const { data } =
      await API.get("/orders");

    return data;
  };



/*
|--------------------------------------------------------------------------
| GET ALL ORDERS (ADMIN)
|--------------------------------------------------------------------------
*/

export const getAllOrders =
  async () => {
    const { data } =
      await API.get(
        "/admin/orders"
      );

    return data;
  };