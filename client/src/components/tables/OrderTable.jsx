export default function OrdersTable({
  orders,
}) {
  return (
    <table className="w-full">
      <thead className="bg-black text-white">
        <tr>
          <th className="p-4 text-left">
            User
          </th>

          <th className="p-4 text-left">
            Amount
          </th>

          <th className="p-4 text-left">
            Status
          </th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) => (
          <tr
            key={order._id}
            className="border-b"
          >
            <td className="p-4">
              {order.user?.name}
            </td>

            <td className="p-4">
              ₹{order.totalAmount}
            </td>

            <td className="p-4">
              {order.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}