export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
      />

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}