import { Video, TrendingUp, Users, MessageSquare, BarChart3, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Content Creation",
      description: "Beautifully crafted visual stories that speak to hearts and inspire action.",
      features: ["Video Storytelling", "Social Content", "Brand Films", "Creative Direction"],
      gradient: "from-rose-300 to-pink-400",
      bgGradient: "from-rose-50 to-pink-50"
    },
    {
      icon: TrendingUp,
      title: "Strategy & Growth",
      description: "Thoughtful strategies that nurture authentic connections and sustainable growth.",
      features: ["Creative Strategy", "Audience Research", "Growth Planning", "Performance Insights"],
      gradient: "from-purple-300 to-pink-400",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Fostering genuine communities where brands and audiences connect meaningfully.",
      features: ["Community Strategy", "Engagement Planning", "Relationship Building", "Ambassador Programs"],
      gradient: "from-amber-300 to-orange-400",
      bgGradient: "from-amber-50 to-orange-50"
    },
    {
      icon: MessageSquare,
      title: "Social Storytelling",
      description: "Crafting compelling narratives across platforms that resonate and inspire.",
      features: ["Platform Strategy", "Content Planning", "Narrative Development", "Audience Engagement"],
      gradient: "from-teal-300 to-emerald-400",
      bgGradient: "from-teal-50 to-emerald-50"
    },
    {
      icon: BarChart3,
      title: "Creative Analytics",
      description: "Understanding what moves people through insightful analysis and optimization.",
      features: ["Story Performance", "Audience Insights", "Creative Testing", "Impact Measurement"],
      gradient: "from-pink-300 to-rose-400",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      icon: Palette,
      title: "Brand Artistry",
      description: "Developing distinctive brand personalities that feel authentic and inspiring.",
      features: ["Visual Identity", "Brand Voice", "Creative Guidelines", "Art Direction"],
      gradient: "from-lavender-300 to-purple-400",
      bgGradient: "from-purple-50 to-lavender-50"
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Enhanced Background Parallax Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-12 w-64 h-64 bg-gradient-to-r from-rose-200 to-pink-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-24 right-12 w-48 h-48 bg-gradient-to-r from-purple-200 to-pink-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-r from-amber-200 to-orange-300 rounded-full opacity-20 animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-teal-200 to-emerald-300 rounded-full opacity-15 animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-pink-200 to-rose-300 rounded-full opacity-25 animate-pulse delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Keep the header as it was liked */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Creative <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From initial spark to final story, I offer a thoughtful suite of services designed to elevate your brand through authentic creativity.
          </p>
        </div>

        {/* Redesigned Services - No Cards, More Artistic Layout */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex items-center gap-16 ${index % 2 === 1 ? 'flex-row-reverse' : ''} animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon and Content Side */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-6">
                  <div className={`bg-gradient-to-r ${service.gradient} w-20 h-20 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white" size={36} />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-slate-800 mb-2">{service.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">{service.description}</p>
                  </div>
                </div>
                
                <div className="pl-26">
                  <div className="grid grid-cols-2 gap-4 max-w-md">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-slate-500">
                        <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Visual Side */}
              <div className="flex-1 flex justify-center">
                <div className={`bg-gradient-to-br ${service.bgGradient} w-80 h-64 rounded-[3rem] relative overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500`}>
                  {/* Floating elements inside */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`bg-gradient-to-r ${service.gradient} w-32 h-32 rounded-full opacity-40 animate-pulse`}></div>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-2xl opacity-60`}></div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className={`bg-gradient-to-r ${service.gradient} w-12 h-12 rounded-xl opacity-50`}></div>
                  </div>
                  <div className="absolute top-1/2 left-8">
                    <div className={`bg-gradient-to-r ${service.gradient} w-8 h-8 rounded-lg opacity-70`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <div className="bg-gradient-to-br from-white/40 to-pink-50/60 backdrop-blur-xl rounded-[3rem] p-12 border border-white/30 shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-rose-300 to-pink-400 rounded-full opacity-30"></div>
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-300 to-pink-400 rounded-2xl opacity-25"></div>
              <div className="absolute top-1/2 right-12 w-8 h-8 bg-gradient-to-r from-amber-300 to-orange-400 rounded-lg opacity-40"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-slate-800 mb-6">Ready to Create Something Beautiful?</h3>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's collaborate to bring your vision to life through authentic storytelling and meaningful creative work that truly resonates.
              </p>
              <button className="bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 text-white px-12 py-5 rounded-full font-medium text-xl hover:scale-105 transition-transform duration-300 shadow-xl">
                Begin Your Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
