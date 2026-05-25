"use client";

import "./globals.css";

import { Provider } from "react-redux";

import { store } from "@/redux/store";

import Navbar from "@/components/navbar/Navbar";

import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}) {

  const pathname = usePathname();

  /*
  |--------------------------------------------------------------------------
  | HIDE NAVBAR PAGES
  |--------------------------------------------------------------------------
  */

  const hideNavbar =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/admin/login";

  return (
    <html lang="en">

      <body>

        <Provider store={store}>

          {/* SHOW NAVBAR */}

          {!hideNavbar && <Navbar />}

          {/* PAGE CONTENT */}

          {children}

        </Provider>

      </body>

    </html>
  );
}