"use client";

import { useState } from "react";



export default function NotificationPanel() {

  const [message, setMessage] =
    useState("");



  const sendNotification = () => {
    alert(
      `Notification Sent: ${message}`
    );

    setMessage("");
  };



  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Notification Engine
      </h2>

      <textarea
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Write notification..."
        className="w-full border rounded-xl p-4 h-40"
      />

      <button
        onClick={sendNotification}
        className="mt-5 bg-black text-white px-6 py-3 rounded-xl"
      >
        Send Notification
      </button>

    </div>
  );
}