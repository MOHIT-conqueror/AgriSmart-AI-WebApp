export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button"
}) {
  const base =
    "rounded-lg font-medium transition duration-200";

  const variants = {
    primary:
      "bg-green-600 text-white hover:bg-green-700",
    secondary:
      "bg-gray-700 text-white hover:bg-gray-800",
    outline:
      "border border-green-600 text-green-600 hover:bg-green-100"
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg"
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
}