import API from "./axios";



/*
|--------------------------------------------------------------------------
| GET CART
|--------------------------------------------------------------------------
*/

export const getCart = async () => {
  const { data } = await API.get(
    "/cart"
  );

  return data;
};



/*
|--------------------------------------------------------------------------
| ADD TO CART
|--------------------------------------------------------------------------
*/

export const addToCart = async (
  productId,
  quantity = 1
) => {
  const { data } = await API.post(
    "/cart",
    {
      productId,
      quantity,
    }
  );

  return data;
};



/*
|--------------------------------------------------------------------------
| CLEAR CART
|--------------------------------------------------------------------------
*/

export const clearCart = async () => {
  const { data } = await API.delete(
    "/cart"
  );

  return data;
};