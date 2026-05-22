"use client";



export default function LoginForm({
  formData,
  handleChange,
  handleSubmit,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow"
    >
      <h1 className="text-3xl font-bold mb-6">
        Login
      </h1>

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border p-3 rounded mb-4"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full border p-3 rounded mb-4"
        onChange={handleChange}
      />

      <button className="bg-black text-white w-full py-3 rounded">
        Login
      </button>
    </form>
  );
}