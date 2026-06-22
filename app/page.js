import Link from "next/link";
import {
  Bot,
  CloudSun,
  Tractor,
  Handshake,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800 pt-6 pb-6 sm:pt-10 sm:pb-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-gray-800 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-8 border border-emerald-200 dark:border-gray-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            AI-Powered Agricultural Coordination
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
            Empowering farmers with <br className="hidden sm:block" />
            <span className="text-emerald-600 dark:text-emerald-400">
              intelligent insights
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Crop advisory, weather-based recommendations, harvest tracking,
            and direct buyer connections — all in one unified platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/dashboard"
              className="px-8 py-3.5 text-base font-semibold rounded-lg bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 transition flex items-center justify-center gap-2"
            >
              View Dashboard <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="px-8 py-3.5 text-base font-semibold rounded-lg bg-white dark:bg-gray-800 text-emerald-700 dark:text-emerald-300 border-2 border-emerald-200 dark:border-gray-700 hover:border-emerald-300 hover:bg-emerald-50 dark:hover:bg-gray-700 transition flex items-center justify-center"
            >
              Learn how it works
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 px-4 sm:px-6 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-2">
              Platform Features
            </h2>

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Everything your farm needs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Bot,
                title: "AI Advisory",
                desc: "24/7 crop guidance powered by advanced language models.",
              },
              {
                icon: CloudSun,
                title: "Smart Weather",
                desc: "Hyper-local forecasting for perfect irrigation timing.",
              },
              {
                icon: Tractor,
                title: "Harvest Tracking",
                desc: "Coordinate maturity timelines with local cooperatives.",
              },
              {
                icon: Handshake,
                title: "Direct Buyers",
                desc: "Connect securely with commercial buyers, no middlemen.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-emerald-200 hover:shadow-md transition duration-200"
              >
                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-emerald-100 dark:border-gray-600 flex items-center justify-center mb-5">
                  <feature.icon
                    className="text-emerald-600 dark:text-emerald-400"
                    size={24}
                  />
                </div>

                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-emerald-900 dark:bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            How AgriSmart works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-800 dark:bg-gray-700 flex items-center justify-center text-xl font-bold mb-4 border border-emerald-700 dark:border-gray-600">
                1
              </div>
              <h4 className="text-lg font-semibold mb-2 text-emerald-50">
                Set up your profile
              </h4>
              <p className="text-emerald-200 dark:text-gray-300 text-sm">
                Enter your farm size, location, and current crop cycle.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-800 dark:bg-gray-700 flex items-center justify-center text-xl font-bold mb-4 border border-emerald-700 dark:border-gray-600">
                2
              </div>
              <h4 className="text-lg font-semibold mb-2 text-emerald-50">
                Receive AI guidance
              </h4>
              <p className="text-emerald-200 dark:text-gray-300 text-sm">
                Get real-time alerts for weather, pests, and watering.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-800 dark:bg-gray-700 flex items-center justify-center text-xl font-bold mb-4 border border-emerald-700 dark:border-gray-600">
                3
              </div>
              <h4 className="text-lg font-semibold mb-2 text-emerald-50">
                Harvest & Sell
              </h4>
              <p className="text-emerald-200 dark:text-gray-300 text-sm">
                Track readiness and connect with buyers seamlessly.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}