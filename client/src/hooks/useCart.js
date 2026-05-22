"use client";

import { useEffect, useState } from "react";

import API from "@/services/axios";



const useCart = () => {
  const [cart, setCart] = useState(null);

  const [loading, setLoading] =
    useState(true);



  useEffect(() => {
    fetchCart();
  }, []);



  const fetchCart = async () => {
    try {
      const { data } = await API.get(
        "/cart"
      );

      setCart(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };



  const addToCart = async (
    productId,
    quantity = 1
  ) => {
    try {
      await API.post("/cart", {
        productId,
        quantity,
      });

      await fetchCart();
    } catch (error) {
      console.log(error);
    }
  };



  const getCartTotal = () => {
    if (!cart?.products) return 0;

    return cart.products.reduce(
      (total, item) =>
        total +
        item.product.price *
          item.quantity,
      0
    );
  };



  const getCartCount = () => {
    if (!cart?.products) return 0;

    return cart.products.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );
  };



  return {
    cart,
    loading,
    addToCart,
    getCartTotal,
    getCartCount,
    fetchCart,
  };
};



export default useCart;