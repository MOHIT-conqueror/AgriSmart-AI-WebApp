export default function Hero() {
  return (
    <div className="bg-emerald-50/50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-100 dark:border-gray-700">
      <div className="max-w-4xl mx-auto text-center">

        {/* Hero Badge */}
        <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-emerald-200 dark:border-gray-700 rounded-full px-4 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-6 shadow-sm">
          <span>✨</span> AI-Powered Agricultural Coordination
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          Empowering farmers with <br className="hidden sm:block" />
          <span className="text-emerald-600 dark:text-emerald-400">
            intelligent insights
          </span>
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Crop advisory, weather-based recommendations, harvest tracking,
          and direct buyer connections — all in one platform.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="/dashboard"
            className="px-6 py-3 text-sm font-semibold rounded-lg bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 transition text-center"
          >
            View Dashboard →
          </a>

          <a
            href="/about"
            className="px-6 py-3 text-sm font-semibold rounded-lg border-2 border-emerald-600 bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-700 transition text-center"
          >
            Learn how it works
          </a>
        </div>

      </div>
    </div>
  );
}