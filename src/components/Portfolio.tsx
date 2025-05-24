
import { useState } from "react";
import IPhoneMockup from "./IPhoneMockup";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Social Stories", "Brand Narratives", "Product Showcases", "Personal Moments"];

  const projects = [
    {
      id: 1,
      title: "Dreamy Fashion Story",
      category: "Social Stories",
      client: "Ethereal Boutique",
      views: "2.3M",
      videoPlaceholder: "🌸 Fashion Magic",
      description: "A whimsical journey through seasonal fashion that captured hearts worldwide",
      details: "This campaign featured soft pastels and dreamy aesthetics, resulting in 300% engagement increase"
    },
    {
      id: 2,
      title: "Artisan Product Launch",
      category: "Product Showcases",
      client: "Craft & Co.",
      views: "500K",
      videoPlaceholder: "🎨 Handmade Beauty",
      description: "Showcasing the soul behind handcrafted products with intimate storytelling",
      details: "Behind-the-scenes content that highlighted the craftsmanship and artisan stories"
    },
    {
      id: 3,
      title: "Heritage Brand Story",
      category: "Brand Narratives",
      client: "Legacy & Co.",
      views: "1.2M",
      videoPlaceholder: "📖 Timeless Tales",
      description: "A poetic series celebrating tradition and innovation in perfect harmony",
      details: "Multi-part series that bridged generational gaps and modernized brand perception"
    },
    {
      id: 4,
      title: "Creative Process",
      category: "Personal Moments",
      client: "Personal",
      views: "750K",
      videoPlaceholder: "✨ Behind Magic",
      description: "Raw, beautiful glimpses into the creative process and inspiration",
      details: "Authentic content showing the real moments behind creative work"
    },
    {
      id: 5,
      title: "Wellness Journey",
      category: "Social Stories",
      client: "Bloom Wellness",
      views: "1.8M",
      videoPlaceholder: "🌿 Mindful Living",
      description: "Inspiring content about self-care and mindful living practices",
      details: "Wellness campaign that promoted mental health awareness and self-care rituals"
    },
    {
      id: 6,
      title: "Cultural Celebration",
      category: "Brand Narratives",
      client: "Heritage Events",
      views: "400K",
      videoPlaceholder: "🎭 Cultural Pride",
      description: "Celebrating diversity and cultural richness through visual storytelling",
      details: "Cultural storytelling that honored traditions while embracing modern expression"
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Enhanced Background Parallax Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-48 h-48 bg-gradient-to-r from-rose-200 to-pink-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-r from-purple-200 to-pink-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-amber-200 to-orange-300 rounded-full opacity-30 animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/3 w-36 h-36 bg-gradient-to-r from-teal-200 to-emerald-300 rounded-full opacity-25 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-slate-800 mb-8 leading-tight">
            My <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 bg-clip-text text-transparent italic">Creative Journey</span>
          </h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Each project tells a unique story, woven with creativity, passion, and purpose. Explore the narratives that have touched hearts and transformed brands.
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-xl scale-105"
                  : "bg-white/70 backdrop-blur-sm text-slate-600 hover:bg-white/90 hover:text-slate-800 border border-white/50 hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Enhanced Project Grid with iPhone Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <IPhoneMockup 
                  videoPlaceholder={project.videoPlaceholder}
                  project={{
                    title: project.title,
                    category: project.category,
                    client: project.client,
                    views: project.views,
                    details: project.details
                  }}
                />
                
                {/* Project title below iPhone */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                  <p className="text-slate-500 italic">{project.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 text-white px-12 py-5 rounded-full font-medium text-xl hover:scale-105 transition-transform duration-300 shadow-xl">
            Discover More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
