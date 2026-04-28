import {
  Dumbbell,
  Waves,
  Building2,
  Trees,
  Baby,
  Landmark,
} from "lucide-react";

const amenities = [
  {
    icon: Dumbbell,
    title: "Gym",
    description:
      "Fully equipped fitness center with modern workout machines and a healthy training environment.",
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    description:
      "Clean and spacious swimming pool for relaxation, fitness, and family fun.",
  },
  {
    icon: Building2,
    title: "Club House",
    description:
      "A premium clubhouse for indoor activities, gatherings, and community engagement.",
  },
  {
    icon: Trees,
    title: "Garden",
    description:
      "Beautiful landscaped gardens with greenery, walking paths, and peaceful seating areas.",
  },
  {
    icon: Baby,
    title: "Kids Play Area",
    description:
      "Safe and fun play zone designed for children with engaging outdoor activities.",
  },
  {
    icon: Landmark,
    title: "Community Hall",
    description:
      "Spacious community hall for meetings, celebrations, and social events.",
  },
];

export default function Amenities() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold uppercase tracking-wider">
            Amenities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
            Premium Lifestyle Amenities
          </h2>
          <p className="text-slate-600 mt-4 max-w-3xl mx-auto leading-relaxed">
            Enjoy a comfortable and modern lifestyle with thoughtfully designed
            amenities for fitness, relaxation, recreation, and community living.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  <Icon className="w-7 h-7 text-emerald-600" />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
