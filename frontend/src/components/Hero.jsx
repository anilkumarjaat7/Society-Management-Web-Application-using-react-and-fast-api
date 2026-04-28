import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Users,
  Building2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-10 w-72 h-72 bg-emerald-200/40 dark:bg-emerald-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-16 right-10 w-80 h-80 bg-blue-200/40 dark:bg-blue-500/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium dark:bg-emerald-500/10 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              Smart & Secure Society Management
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Manage Your Society
              <span className="block text-emerald-600 dark:text-emerald-400">
                Smarter with SocietyHub
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Simplify society operations with one powerful platform for
              residents, management committees, and security teams. Handle
              visitors, payments, complaints, notices, and amenities with ease.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/20">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-semibold hover:bg-slate-100 dark:hover:bg-slate-900 transition">
                <PlayCircle className="w-5 h-5" />
                Learn More
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
              <div className="rounded-2xl bg-slate-100 dark:bg-slate-900 p-4 text-center">
                <Users className="w-6 h-6 mx-auto text-emerald-600 mb-2" />
                <h3 className="text-xl font-bold">500+</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Residents
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 dark:bg-slate-900 p-4 text-center">
                <Building2 className="w-6 h-6 mx-auto text-emerald-600 mb-2" />
                <h3 className="text-xl font-bold">12</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Towers
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 dark:bg-slate-900 p-4 text-center">
                <ShieldCheck className="w-6 h-6 mx-auto text-emerald-600 mb-2" />
                <h3 className="text-xl font-bold">24/7</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Security
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 blur-3xl rounded-full"></div>

            <img
              src="image.png"
              alt="Society Management"
              className="relative w-full max-w-4xl drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
