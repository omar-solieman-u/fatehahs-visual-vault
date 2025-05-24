
import { ChevronDown, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-rose-200 to-pink-300 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-sky-200 to-blue-300 rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-amber-200 to-orange-300 rounded-full opacity-60 animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-emerald-200 to-teal-300 rounded-full opacity-50 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-slate-800 mb-6 leading-tight font-serif">
            CREATING
            <br />
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-coral-400 bg-clip-text text-transparent italic">
              stories
            </span>
            <br />
            <span className="text-4xl md:text-6xl font-light text-slate-600">that resonate deeply</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Content Creator & Marketing Executive crafting authentic narratives and building brands that speak to the soul
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-rose-300 to-pink-400 text-white px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
              <span className="flex items-center gap-2">
                <Play size={20} />
                Explore My Work
              </span>
            </button>
            <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-medium text-lg hover:bg-slate-50 transition-all duration-300">
              Let's Connect
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-white/60">
              <div className="text-3xl font-bold text-slate-700 mb-2">500K+</div>
              <div className="text-slate-500 font-medium">Content Views</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-white/60">
              <div className="text-3xl font-bold text-slate-700 mb-2">50+</div>
              <div className="text-slate-500 font-medium">Brand Stories</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-white/60">
              <div className="text-3xl font-bold text-slate-700 mb-2">25+</div>
              <div className="text-slate-500 font-medium">Creative Partners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;
