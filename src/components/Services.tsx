
import { Video, TrendingUp, Users, MessageSquare, BarChart3, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Content Creation",
      description: "Beautifully crafted visual stories that speak to hearts and inspire action.",
      features: ["Video Storytelling", "Social Content", "Brand Films", "Creative Direction"],
      gradient: "from-rose-300 to-pink-400"
    },
    {
      icon: TrendingUp,
      title: "Strategy & Growth",
      description: "Thoughtful strategies that nurture authentic connections and sustainable growth.",
      features: ["Creative Strategy", "Audience Research", "Growth Planning", "Performance Insights"],
      gradient: "from-lavender-300 to-purple-400"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Fostering genuine communities where brands and audiences connect meaningfully.",
      features: ["Community Strategy", "Engagement Planning", "Relationship Building", "Ambassador Programs"],
      gradient: "from-peach-300 to-coral-400"
    },
    {
      icon: MessageSquare,
      title: "Social Storytelling",
      description: "Crafting compelling narratives across platforms that resonate and inspire.",
      features: ["Platform Strategy", "Content Planning", "Narrative Development", "Audience Engagement"],
      gradient: "from-sky-300 to-blue-400"
    },
    {
      icon: BarChart3,
      title: "Creative Analytics",
      description: "Understanding what moves people through insightful analysis and optimization.",
      features: ["Story Performance", "Audience Insights", "Creative Testing", "Impact Measurement"],
      gradient: "from-rose-300 to-peach-400"
    },
    {
      icon: Palette,
      title: "Brand Artistry",
      description: "Developing distinctive brand personalities that feel authentic and inspiring.",
      features: ["Visual Identity", "Brand Voice", "Creative Guidelines", "Art Direction"],
      gradient: "from-pink-300 to-rose-400"
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Enhanced Background Parallax Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-12 w-44 h-44 bg-gradient-to-r from-rose-200 to-pink-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-24 right-12 w-36 h-36 bg-gradient-to-r from-lavender-200 to-purple-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-gradient-to-r from-peach-200 to-coral-300 rounded-full opacity-30 animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-sky-200 to-blue-300 rounded-full opacity-25 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-slate-800 mb-8 font-serif leading-tight">
            Creative <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-peach-400 bg-clip-text text-transparent italic">Services</span>
          </h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            From initial spark to final story, I offer a thoughtful suite of services designed to elevate your brand through authentic creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-10 border border-white/40 hover:border-pink-300/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                <div className={`bg-gradient-to-r ${service.gradient} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="text-white" size={36} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-6 font-serif">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-500">
                      <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mr-4"></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-white/50 backdrop-blur-lg rounded-3xl p-12 border border-white/40 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-slate-800 mb-6 font-serif">Ready to Create Something Beautiful?</h3>
            <p className="text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed text-xl">
              Let's collaborate to bring your vision to life through authentic storytelling and meaningful creative work that truly resonates.
            </p>
            <button className="bg-gradient-to-r from-rose-400 via-pink-400 to-peach-400 text-white px-12 py-5 rounded-full font-medium text-xl hover:scale-105 transition-transform duration-300 shadow-xl font-serif">
              Begin Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
