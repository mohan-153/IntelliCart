import API from "./axios";



/*
|--------------------------------------------------------------------------
| GET ALL PRODUCTS
|--------------------------------------------------------------------------
*/

export const getProducts = async () => {
  const { data } = await API.get(
    "/products"
  );

  return data;
};



/*
|--------------------------------------------------------------------------
| CREATE PRODUCT
|--------------------------------------------------------------------------
*/

export const createProduct =
  async (productData) => {
    const { data } =
      await API.post(
        "/products",
        productData
      );

    return data;
  };



/*
|--------------------------------------------------------------------------
| GET SINGLE PRODUCT
|--------------------------------------------------------------------------
*/

export const getSingleProduct =
  async (id) => {
    const { data } =
      await API.get(
        `/products/${id}`
      );

    return data;
  };



/*
|--------------------------------------------------------------------------
| DELETE PRODUCT
|--------------------------------------------------------------------------
*/

export const deleteProduct =
  async (id) => {
    const { data } =
      await API.delete(
        `/products/${id}`
      );

    return data;
  };