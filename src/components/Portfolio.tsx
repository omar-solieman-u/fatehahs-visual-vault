
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
      description: "A whimsical journey through seasonal fashion that captured hearts worldwide"
    },
    {
      id: 2,
      title: "Artisan Product Launch",
      category: "Product Showcases",
      client: "Craft & Co.",
      views: "500K",
      videoPlaceholder: "🎨 Handmade Beauty",
      description: "Showcasing the soul behind handcrafted products with intimate storytelling"
    },
    {
      id: 3,
      title: "Heritage Brand Story",
      category: "Brand Narratives",
      client: "Legacy & Co.",
      views: "1.2M",
      videoPlaceholder: "📖 Timeless Tales",
      description: "A poetic series celebrating tradition and innovation in perfect harmony"
    },
    {
      id: 4,
      title: "Creative Process",
      category: "Personal Moments",
      client: "Personal",
      views: "750K",
      videoPlaceholder: "✨ Behind Magic",
      description: "Raw, beautiful glimpses into the creative process and inspiration"
    },
    {
      id: 5,
      title: "Wellness Journey",
      category: "Social Stories",
      client: "Bloom Wellness",
      views: "1.8M",
      videoPlaceholder: "🌿 Mindful Living",
      description: "Inspiring content about self-care and mindful living practices"
    },
    {
      id: 6,
      title: "Cultural Celebration",
      category: "Brand Narratives",
      client: "Heritage Events",
      views: "400K",
      videoPlaceholder: "🎭 Cultural Pride",
      description: "Celebrating diversity and cultural richness through visual storytelling"
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-6 font-serif">
            My <span className="bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent italic">Creative Journey</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Each project tells a unique story, woven with creativity, passion, and purpose. Explore the narratives that have touched hearts and transformed brands.
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
                  ? "bg-gradient-to-r from-rose-300 to-pink-400 text-white shadow-lg"
                  : "bg-white/70 text-slate-600 hover:bg-white/90 hover:text-slate-800 border border-white/50"
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
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:border-rose-300 transition-all duration-500 hover:scale-105 shadow-lg">
                <div className="flex justify-center mb-6">
                  <IPhoneMockup videoPlaceholder={project.videoPlaceholder} />
                </div>
                
                <div className="text-center">
                  <span className="inline-block bg-gradient-to-r from-rose-300 to-pink-400 text-white text-xs px-3 py-1 rounded-full mb-3 font-medium">
                    {project.category}
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">{project.title}</h3>
                  <p className="text-slate-500 text-sm mb-3 italic">{project.client}</p>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Views</span>
                    <span className="text-sky-500 font-bold">{project.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-sky-300 to-teal-400 text-white px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
            Discover More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
