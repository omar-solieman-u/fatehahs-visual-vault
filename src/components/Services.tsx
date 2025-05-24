
import { Video, TrendingUp, Users, MessageSquare, BarChart3, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Content Creation",
      description: "Beautifully crafted visual stories that speak to hearts and inspire action.",
      features: ["Video Storytelling", "Social Content", "Brand Films", "Creative Direction"]
    },
    {
      icon: TrendingUp,
      title: "Strategy & Growth",
      description: "Thoughtful strategies that nurture authentic connections and sustainable growth.",
      features: ["Creative Strategy", "Audience Research", "Growth Planning", "Performance Insights"]
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Fostering genuine communities where brands and audiences connect meaningfully.",
      features: ["Community Strategy", "Engagement Planning", "Relationship Building", "Ambassador Programs"]
    },
    {
      icon: MessageSquare,
      title: "Social Storytelling",
      description: "Crafting compelling narratives across platforms that resonate and inspire.",
      features: ["Platform Strategy", "Content Planning", "Narrative Development", "Audience Engagement"]
    },
    {
      icon: BarChart3,
      title: "Creative Analytics",
      description: "Understanding what moves people through insightful analysis and optimization.",
      features: ["Story Performance", "Audience Insights", "Creative Testing", "Impact Measurement"]
    },
    {
      icon: Palette,
      title: "Brand Artistry",
      description: "Developing distinctive brand personalities that feel authentic and inspiring.",
      features: ["Visual Identity", "Brand Voice", "Creative Guidelines", "Art Direction"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-6 font-serif">
            Creative <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent italic">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From initial spark to final story, I offer a thoughtful suite of services designed to elevate your brand through authentic creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:border-emerald-300 transition-all duration-500 hover:scale-105 animate-fade-in shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-r from-emerald-300 to-teal-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <service.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4 font-serif">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-slate-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
            <h3 className="text-3xl font-bold text-slate-800 mb-4 font-serif">Ready to Create Something Beautiful?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate to bring your vision to life through authentic storytelling and meaningful creative work that truly resonates.
            </p>
            <button className="bg-gradient-to-r from-emerald-300 to-teal-400 text-white px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
              Begin Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
