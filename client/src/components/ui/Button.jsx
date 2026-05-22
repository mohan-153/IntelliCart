export default function Button({
  children,
  onClick,
  className,
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white px-5 py-3 rounded ${className}`}
    >
      {children}
    </button>
  );
}