"use client";

import Link from "next/link";

import {
  useEffect,
  useState,
  useRef,
} from "react";

import { useRouter } from "next/navigation";

import {
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
  FaBoxOpen,
  FaSignOutAlt,
} from "react-icons/fa";



export default function Navbar() {

  const router = useRouter();



  /*
  |--------------------------------------------------------------------------
  | STATE
  |--------------------------------------------------------------------------
  */

  const [user, setUser] =
    useState(null);



  const [showProfileMenu,
    setShowProfileMenu] =
    useState(false);



  const [search,
    setSearch] =
    useState("");

  const dropdownRef = useRef(null);

  /*
  |--------------------------------------------------------------------------
  | LOAD USER
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    const userInfo =
      sessionStorage.getItem(
        "userInfo"
      );

    if (userInfo) {

      setUser(
        JSON.parse(userInfo)
      );

    }

  }, []);

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target
        )
      ) {

        setShowProfileMenu(false);

      }

    };



    document.addEventListener(
      "mousedown",
      handleClickOutside
    );



    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);

  /*
  |--------------------------------------------------------------------------
  | LOGOUT
  |--------------------------------------------------------------------------
  */

  const logoutHandler = () => {

  sessionStorage.clear();

  setUser(null);

  setShowProfileMenu(false);

  router.replace("/");

};



  /*
  |--------------------------------------------------------------------------
  | SEARCH
  |--------------------------------------------------------------------------
  */

  const searchHandler = (
    e
  ) => {

    e.preventDefault();

    if (!search.trim())
      return;

    router.push(
      `/products?keyword=${search}`
    );

  };



  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}

          <Link
            href="/"
            className="text-4xl font-bold text-black"
          >
            IntelliCart
          </Link>



          {/* SEARCH BAR */}

          <form
            onSubmit={
              searchHandler
            }
            className="hidden md:flex items-center bg-gray-100 rounded-2xl px-4 py-3 w-full max-w-xl mx-10"
          >

            <FaSearch className="text-gray-400" />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="bg-transparent outline-none w-full px-4"
            />

          </form>



          {/* RIGHT SECTION */}

          <div className="flex items-center gap-6">

            {/* CART */}

            <button
              onClick={() =>
                router.push("/cart")
              }
              className="relative flex items-center gap-2 font-semibold"
            >

              <FaShoppingCart className="text-2xl" />

              <span className="hidden md:block">
                Cart
              </span>

            </button>



            {/* LOGIN BUTTON */}

            {!user ? (

              <button
                onClick={() =>
                  router.push(
                    "/login"
                  )
                }
                className="bg-black text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-800 transition"
              >

                Sign In

              </button>

            ) : (

              /* PROFILE */

              <div className="relative"
                ref={dropdownRef}
              >

                <button
                  onClick={() =>
                    setShowProfileMenu(
                      !showProfileMenu
                    )
                  }
                  className="flex items-center gap-3"
                >

                  <FaUserCircle className="text-4xl" />

                  <span className="hidden md:block font-semibold">
                    {user.name}
                  </span>

                </button>



                {/* PROFILE DROPDOWN */}

                {showProfileMenu && (

                  <div className="absolute right-0 mt-4 bg-white shadow-2xl rounded-2xl w-72 p-5 border">

                    {/* USER INFO */}

                    <div className="border-b pb-4">

                      <h2 className="font-bold text-xl">
                        {user.name}
                      </h2>

                      <p className="text-gray-500 text-sm mt-1 break-all">
                        {user.email}
                      </p>

                    </div>



                    {/* MENU */}

                    <div className="mt-4 space-y-3">

                      <button
                        onClick={() =>
                          router.push(
                            "/profile"
                          )
                        }
                        className="flex items-center gap-3 w-full hover:bg-gray-100 p-3 rounded-xl"
                      >

                        <FaUserCircle />

                        Profile

                      </button>



                      <button
                        onClick={() =>
                          router.push(
                            "/orders"
                          )
                        }
                        className="flex items-center gap-3 w-full hover:bg-gray-100 p-3 rounded-xl"
                      >

                        <FaBoxOpen />

                        Orders & Returns

                      </button>



                      {/* ADMIN */}

                      {user.role ===
                        "admin" && (

                          <button
                            onClick={() =>
                              router.push(
                                "/admin/dashboard"
                              )
                            }
                            className="flex items-center gap-3 w-full hover:bg-gray-100 p-3 rounded-xl"
                          >

                            <FaUserCircle />

                            Admin Dashboard

                          </button>

                        )}



                      {/* LOGOUT */}

                      <button
                        onClick={
                          logoutHandler
                        }
                        className="flex items-center gap-3 w-full hover:bg-red-100 text-red-500 p-3 rounded-xl"
                      >

                        <FaSignOutAlt />

                        Logout

                      </button>

                    </div>

                  </div>

                )}

              </div>

            )}

          </div>

        </div>

      </div>

    </nav>
  );
}