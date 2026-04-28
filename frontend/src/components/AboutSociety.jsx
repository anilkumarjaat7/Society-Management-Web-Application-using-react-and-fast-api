const AboutSociety = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold uppercase tracking-wider">
            About Society
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
            Welcome to Green Valley Residency
          </h2>
          <p className="text-slate-600 mt-4 max-w-3xl mx-auto leading-relaxed">
            Green Valley Residency is a modern and secure residential society
            designed to provide a peaceful, comfortable, and community-friendly
            lifestyle for all residents. With world-class amenities, 24/7
            security, and well-maintained infrastructure, we ensure a safe and
            premium living experience.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop"
              alt="Society Building"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />

            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-md">
              <p className="text-sm text-slate-500">Security Status</p>
              <h4 className="text-lg font-bold text-emerald-600">
                24/7 Active Monitoring
              </h4>
            </div>
          </div>

          {/* Right Side Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-slate-500 text-sm font-medium">
                Society Name
              </h3>
              <p className="text-xl font-bold text-slate-800 mt-2">
                Green Valley Residency
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-slate-500 text-sm font-medium">
                Total Towers
              </h3>
              <p className="text-xl font-bold text-slate-800 mt-2">8 Towers</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-slate-500 text-sm font-medium">
                Total Flats
              </h3>
              <p className="text-xl font-bold text-slate-800 mt-2">320 Flats</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-slate-500 text-sm font-medium">
                Security Status
              </h3>
              <p className="text-xl font-bold text-emerald-600 mt-2">
                Fully Secured
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSociety;
