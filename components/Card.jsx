export default function Card({ title, description, actionText }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden hover:border-emerald-500 hover:shadow-md transition duration-200 flex flex-col justify-between p-6">
      
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {actionText && (
        <button className="w-full text-center px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-gray-700 hover:bg-emerald-100 dark:hover:bg-gray-600 rounded-lg transition">
          {actionText}
        </button>
      )}
    </div>
  );
}