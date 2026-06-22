export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
          <span className="text-base font-semibold text-gray-900">AgriSmart AI</span>
          <span className="text-gray-300">|</span>
          <p className="text-sm text-gray-500">© 2026 Sustainable Tech Solutions.</p>
        </div>
        <div className="flex space-x-6 text-sm text-gray-500">
          <a href="#" className="hover:text-emerald-600 transition">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-600 transition">Terms of Service</a>
          <a href="#" className="hover:text-emerald-600 transition">Support</a>
        </div>
      </div>
    </footer>
  );
}