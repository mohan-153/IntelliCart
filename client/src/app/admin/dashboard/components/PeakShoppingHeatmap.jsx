"use client";



export default function PeakShoppingHeatmap() {

  const times = [
    "8AM",
    "10AM",
    "12PM",
    "2PM",
    "4PM",
    "6PM",
    "8PM",
  ];



  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Peak Shopping Time
      </h2>

      <div className="grid grid-cols-4 gap-4">

        {times.map((time, index) => (
          <div
            key={index}
            className="bg-blue-100 p-6 rounded-xl text-center font-bold"
          >

            {time}

          </div>
        ))}

      </div>

    </div>
  );
}