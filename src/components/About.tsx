
import { Sparkles, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              {/* Profile Image Placeholder with Creative Border */}
              <div className="w-full h-full bg-gradient-to-br from-rose-300 via-sky-300 to-amber-300 rounded-3xl rotate-6"></div>
              <div className="absolute inset-4 bg-white rounded-3xl -rotate-6 flex items-center justify-center shadow-xl">
                <div className="text-slate-400 text-center">
                  <div className="text-6xl mb-4">👩‍🎨</div>
                  <div className="font-serif italic">Creative Portrait</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-200 to-orange-300 w-16 h-16 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="text-white" size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-200 to-teal-300 w-12 h-12 rounded-full flex items-center justify-center animate-pulse delay-1000">
              <Zap className="text-white" size={16} />
            </div>
          </div>

          <div className="text-slate-700">
            <h2 className="text-5xl font-bold mb-6 font-serif">
              Meet <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent italic">Fatehah</span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-6 leading-relaxed font-light">
              I'm a passionate storyteller who believes in the transformative power of authentic content. With a keen eye for beauty and a heart for meaningful connections, I help brands discover their unique voice and share their stories in ways that truly matter.
            </p>

            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              My approach blends artistic vision with strategic thinking, ensuring every piece of content not only captivates but also creates genuine emotional connections. From concept to creation, I craft experiences that inspire, engage, and leave lasting impressions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-lg">
                <Target className="text-rose-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2 font-serif">Authentic Storytelling</h3>
                <p className="text-slate-600">Crafting narratives that resonate deeply with audiences and create meaningful brand connections.</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-lg">
                <Sparkles className="text-sky-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2 font-serif">Creative Direction</h3>
                <p className="text-slate-600">Developing distinctive visual identities and content strategies that stand out beautifully.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
