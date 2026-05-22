"use client";



export default function UserSegmentation() {

  const segments = [
    {
      title: "Champions",
      users: 120,
      color: "bg-green-100",
    },

    {
      title: "At Risk",
      users: 45,
      color: "bg-yellow-100",
    },

    {
      title: "Inactive",
      users: 90,
      color: "bg-red-100",
    },
  ];



  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Customer Segmentation
      </h2>

      <div className="space-y-4">

        {segments.map((segment, index) => (
          <div
            key={index}
            className={`${segment.color} p-5 rounded-xl flex justify-between`}
          >

            <h3 className="font-bold">
              {segment.title}
            </h3>

            <span className="font-bold">
              {segment.users} Users
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}