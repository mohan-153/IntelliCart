"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";



const useAuth = () => {
  const router = useRouter();

  const [user, setUser] = useState(null);

  const [loading, setLoading] =
    useState(true);



  useEffect(() => {
    checkAuth();
  }, []);



  const checkAuth = () => {
    try {
      const userInfo =
        localStorage.getItem("userInfo");

      if (userInfo) {
        const parsedUser =
          JSON.parse(userInfo);

        setUser(parsedUser);
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };



  const logout = () => {
    localStorage.removeItem("userInfo");

    setUser(null);

    router.push("/login");
  };



  return {
    user,
    loading,
    logout,
  };
};



export default useAuth;