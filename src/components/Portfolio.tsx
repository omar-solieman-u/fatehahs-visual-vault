
import { useState } from "react";
import IPhoneMockup from "./IPhoneMockup";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Social Media", "Brand Campaigns", "Product Launches", "Personal Content"];

  const projects = [
    {
      id: 1,
      title: "Viral TikTok Campaign",
      category: "Social Media",
      client: "Fashion Brand X",
      views: "2.3M",
      videoPlaceholder: "🎬 Fashion Content",
      description: "Created a viral dance challenge that increased brand awareness by 300%"
    },
    {
      id: 2,
      title: "Product Launch Strategy",
      category: "Product Launches",
      client: "Tech Startup Y",
      views: "500K",
      videoPlaceholder: "📱 Product Demo",
      description: "Comprehensive launch campaign across multiple platforms"
    },
    {
      id: 3,
      title: "Brand Storytelling Series",
      category: "Brand Campaigns",
      client: "Lifestyle Brand Z",
      views: "1.2M",
      videoPlaceholder: "🌟 Brand Story",
      description: "6-part series showcasing brand values and customer stories"
    },
    {
      id: 4,
      title: "Behind the Scenes",
      category: "Personal Content",
      client: "Personal",
      views: "750K",
      videoPlaceholder: "🎭 BTS Content",
      description: "Raw, authentic content showing the creative process"
    },
    {
      id: 5,
      title: "Influencer Collaboration",
      category: "Social Media",
      client: "Beauty Brand A",
      views: "1.8M",
      videoPlaceholder: "💄 Beauty Collab",
      description: "Strategic partnership content with macro-influencers"
    },
    {
      id: 6,
      title: "Event Coverage",
      category: "Brand Campaigns",
      client: "Corporate Event B",
      views: "400K",
      videoPlaceholder: "🎪 Event Highlights",
      description: "Live event coverage and post-event content strategy"
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore my latest projects across different categories. Each piece represents a unique story, strategy, and successful outcome.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
                <div className="flex justify-center mb-6">
                  <IPhoneMockup videoPlaceholder={project.videoPlaceholder} />
                </div>
                
                <div className="text-center">
                  <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/60 text-sm mb-3">{project.client}</p>
                  <p className="text-white/80 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Views</span>
                    <span className="text-cyan-400 font-bold">{project.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
