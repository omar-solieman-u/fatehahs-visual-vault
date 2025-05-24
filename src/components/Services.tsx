
import { Video, TrendingUp, Users, MessageSquare, BarChart3, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Content Creation",
      description: "High-quality video content for social media, advertising, and brand storytelling.",
      features: ["Video Production", "Social Media Content", "Brand Videos", "Tutorials & Demos"]
    },
    {
      icon: TrendingUp,
      title: "Marketing Strategy",
      description: "Comprehensive marketing strategies that drive engagement and conversions.",
      features: ["Campaign Strategy", "Market Analysis", "Growth Planning", "ROI Optimization"]
    },
    {
      icon: Users,
      title: "Influencer Partnerships",
      description: "Strategic collaborations and partnership management for maximum impact.",
      features: ["Partnership Strategy", "Influencer Outreach", "Campaign Management", "Performance Tracking"]
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description: "End-to-end social media management across all major platforms.",
      features: ["Content Planning", "Community Management", "Engagement Strategy", "Analytics & Reporting"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data-driven insights to optimize performance and maximize results.",
      features: ["Performance Analysis", "Audience Insights", "Trend Forecasting", "Custom Reports"]
    },
    {
      icon: Palette,
      title: "Brand Development",
      description: "Creating cohesive brand identities that resonate with target audiences.",
      features: ["Brand Strategy", "Visual Identity", "Voice & Tone", "Brand Guidelines"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From content creation to comprehensive marketing strategies, I offer a full suite of services to elevate your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-r from-green-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-white/60">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can work together to create content that drives results and builds meaningful connections with your audience.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
