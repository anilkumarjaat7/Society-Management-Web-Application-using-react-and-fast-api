export default function Hero() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Side - Text */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Your Future with{" "}
            <span className="text-blue-500">TechWired</span>
          </h1>

          <p className="text-gray-300 text-lg">
            Learn Java Full Stack, React, and build real-world projects. Start
            your journey towards becoming a professional developer.
          </p>

          <div className="space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
              Get Started
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img src="hero.png" alt="Hero" className="w-400" />
        </div>
      </div>
    </section>
  );
}
