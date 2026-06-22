import {
  Bot,
  BarChart3,
  CloudLightning,
  MessageCircle,
  Smartphone,
  Sprout,
  Users,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-powered crop advisory chatbot",
    description:
      "Ask anything about your crops and get evidence-backed guidance powered by a large language model, available in Hindi and English.",
  },
  {
    icon: BarChart3,
    title: "Harvest readiness dashboard",
    description:
      "Visualise crop maturity timelines and coordinate with farmer cooperatives in your district for more efficient harvests.",
  },
  {
    icon: CloudLightning,
    title: "Weather-based recommendations",
    description:
      "Receive automatically generated irrigation and spray schedules based on accurate 7-day hyper-local forecasts.",
  },
  {
    icon: MessageCircle,
    title: "Buyer communication management",
    description:
      "Negotiate, message, and transact with verified buyers from a single, secure platform interface — no middlemen.",
  },
  {
    icon: Smartphone,
    title: "Mobile-responsive interface",
    description:
      "Designed to work on any device — from a desktop browser in the office to a basic smartphone in the field.",
  },
  {
    icon: TrendingUp,
    title: "Yield analytics & reporting",
    description:
      "Track season-over-season yield improvements and generate shareable reports for cooperative or government submissions.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 border-b border-green-200 dark:border-gray-700 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest text-green-600 dark:text-green-400 uppercase mb-4">
            About AgriSmart AI
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold text-green-900 dark:text-white leading-tight mb-5">
            Built for the farmers of
            <br className="hidden sm:block" />
            India's next decade
          </h1>

          <p className="text-base sm:text-lg text-green-700 dark:text-gray-300 leading-relaxed max-w-2xl">
            AgriSmart AI is a web-based platform designed to reduce manual coordination,
            improve decision-making, and connect farming communities with technology that
            actually works in the field — not just in a lab.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid sm:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-xs font-semibold tracking-widest text-green-600 dark:text-green-400 uppercase mb-3 block">
            Our mission
          </span>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            AI-powered insights for every farmer
          </h2>

          <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-sm mb-3">
            We believe access to smart, timely, and affordable agricultural guidance
            shouldn't be limited to large commercial farms.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Sprout, label: "Crop health monitoring" },
            { icon: Bot, label: "AI advisory 24/7" },
            { icon: Users, label: "Buyer network" },
            { icon: TrendingUp, label: "Yield analytics" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-green-50 dark:bg-gray-800 border border-green-100 dark:border-gray-700 rounded-xl p-4 flex flex-col items-start gap-2"
            >
              <div className="w-8 h-8 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <Icon size={16} className="text-green-600 dark:text-green-400" />
              </div>
              <span className="text-xs font-medium text-green-800 dark:text-green-300">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Core features */}
      <section className="bg-gray-50 dark:bg-gray-800 border-y border-gray-100 dark:border-gray-700 px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-green-600 dark:text-green-400 uppercase mb-3 block">
            Core capabilities
          </span>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Five pillars of the platform
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-green-300 transition-colors"
              >
                <div className="w-9 h-9 bg-green-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-3">
                  <Icon size={18} className="text-green-600 dark:text-green-400" />
                </div>

                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
                  {title}
                </h3>

                <p className="text-xs text-gray-500 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-800 dark:bg-green-900 px-4 sm:px-6 py-12 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
          Ready to grow smarter?
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/dashboard"
            className="bg-white text-green-800 font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-green-50 transition-colors"
          >
            Get started free
          </a>

          <a
            href="/login"
            className="border border-green-600 text-green-200 text-sm px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors"
          >
            Sign in
          </a>
        </div>
      </section>

    </div>
  );
}