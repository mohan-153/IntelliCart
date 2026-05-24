import API from "./axios";



export const getProducts =
  async (
    keyword = "",
    category = ""
  ) => {

    const { data } =
      await API.get(
        `/products?keyword=${keyword}&category=${category}`
      );

    return data;
  };



export const getProduct =
  async (id) => {

    const { data } =
      await API.get(
        `/products/${id}`
      );

    return data;
  };