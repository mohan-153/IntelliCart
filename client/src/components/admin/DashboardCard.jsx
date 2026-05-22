"use client";

import Link from "next/link";



export default function AdminSidebar() {
  return (
    <aside className="bg-black text-white w-64 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-10">
        Admin
      </h1>

      <div className="flex flex-col gap-5">
        <Link href="/admin/dashboard">
          Dashboard
        </Link>

        <Link href="/admin/products">
          Products
        </Link>

        <Link href="/admin/orders">
          Orders
        </Link>

        <Link href="/admin/users">
          Users
        </Link>

        <Link href="/admin/analytics">
          Analytics
        </Link>
      </div>
    </aside>
  );
}