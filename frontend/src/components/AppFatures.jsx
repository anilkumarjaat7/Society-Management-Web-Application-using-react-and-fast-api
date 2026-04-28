import {
  ShieldCheck,
  Wallet,
  Bell,
  Users,
  Wrench,
  CalendarCheck,
} from "lucide-react";

export default function AppFeatures() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Smart Security",
      description:
        "Enable secure gate access, visitor approvals, and real-time security monitoring for every resident.",
    },
    {
      icon: Wallet,
      title: "Maintenance Payments",
      description:
        "Pay monthly maintenance online, track dues, and view complete payment history in one place.",
    },
    {
      icon: Bell,
      title: "Instant Notices",
      description:
        "Receive society announcements, emergency alerts, and maintenance updates instantly.",
    },
    {
      icon: Users,
      title: "Resident Management",
      description:
        "Manage resident profiles, flat details, family members, and tenant records with ease.",
    },
    {
      icon: Wrench,
      title: "Complaint Tracking",
      description:
        "Raise complaints, monitor status, and get updates on resolution from the management team.",
    },
    {
      icon: CalendarCheck,
      title: "Amenity Booking",
      description:
        "Book society amenities like clubhouse, gym, and community hall with a seamless booking flow.",
    },
  ];
  return (
    <section className="bg-slate-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold uppercase tracking-wider">
            App Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
            Everything You Need in One Society App
          </h2>
          <p className="text-slate-600 mt-4 max-w-3xl mx-auto leading-relaxed">
            Simplify everyday society operations with smart digital tools built
            for residents, management committees, and security teams.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition duration-300 border border-slate-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-emerald-600" />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
