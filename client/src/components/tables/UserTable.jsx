export default function UsersTable({
  users,
}) {
  return (
    <table className="w-full">
      <thead className="bg-black text-white">
        <tr>
          <th className="p-4 text-left">
            Name
          </th>

          <th className="p-4 text-left">
            Email
          </th>

          <th className="p-4 text-left">
            Role
          </th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr
            key={user._id}
            className="border-b"
          >
            <td className="p-4">
              {user.name}
            </td>

            <td className="p-4">
              {user.email}
            </td>

            <td className="p-4">
              {user.role}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}