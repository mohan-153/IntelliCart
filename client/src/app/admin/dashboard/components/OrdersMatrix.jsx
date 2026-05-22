"use client";



export default function OrdersMatrix() {

  const orders = [
    {
      id: "ORD001",
      customer: "Mohan",
      status: "Processing",
    },

    {
      id: "ORD002",
      customer: "Rahul",
      status: "Shipped",
    },

    {
      id: "ORD003",
      customer: "Aakash",
      status: "Delivered",
    },
  ];



  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Order Fulfillment
      </h2>

      <table className="w-full">

        <thead className="bg-black text-white">

          <tr>

            <th className="p-4 text-left">
              Order ID
            </th>

            <th className="p-4 text-left">
              Customer
            </th>

            <th className="p-4 text-left">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b"
            >

              <td className="p-4">
                {order.id}
              </td>

              <td className="p-4">
                {order.customer}
              </td>

              <td className="p-4">
                {order.status}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}