
import { Sparkles, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Parallax Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-rose-200 to-pink-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-lavender-200 to-purple-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-peach-200 to-coral-300 rounded-full opacity-40 animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-r from-sky-200 to-blue-300 rounded-full opacity-30 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="w-96 h-96 mx-auto relative">
              {/* Profile Image with Enhanced Design */}
              <div className="w-full h-full bg-gradient-to-br from-rose-300 via-pink-300 to-peach-300 rounded-[3rem] rotate-6 shadow-2xl"></div>
              <div className="absolute inset-6 bg-white rounded-[3rem] -rotate-6 flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/50">
                <div className="text-slate-400 text-center">
                  <div className="text-8xl mb-6">👩‍🎨</div>
                  <div className="font-serif italic text-xl">Creative Portrait</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-peach-300 to-coral-400 w-20 h-20 rounded-full flex items-center justify-center animate-pulse shadow-xl">
              <Sparkles className="text-white" size={28} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-lavender-300 to-purple-400 w-16 h-16 rounded-full flex items-center justify-center animate-pulse delay-1000 shadow-xl">
              <Zap className="text-white" size={20} />
            </div>
          </div>

          <div className="text-slate-700 space-y-8">
            <h2 className="text-6xl font-bold mb-8 font-serif leading-tight">
              Meet <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-peach-400 bg-clip-text text-transparent italic">Fatehah</span>
            </h2>
            
            <p className="text-2xl text-slate-600 leading-relaxed font-light">
              I'm a passionate storyteller who believes in the transformative power of authentic content. With a keen eye for beauty and a heart for meaningful connections, I help brands discover their unique voice and share their stories in ways that truly matter.
            </p>

            <p className="text-xl text-slate-500 leading-relaxed">
              My approach blends artistic vision with strategic thinking, ensuring every piece of content not only captivates but also creates genuine emotional connections. From concept to creation, I craft experiences that inspire, engage, and leave lasting impressions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="group cursor-pointer transition-all duration-500 hover:scale-105">
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <Target className="text-rose-400 mb-6" size={40} />
                  <h3 className="text-2xl font-semibold mb-4 font-serif">Authentic Storytelling</h3>
                  <p className="text-slate-600 text-lg">Crafting narratives that resonate deeply with audiences and create meaningful brand connections.</p>
                </div>
              </div>
              
              <div className="group cursor-pointer transition-all duration-500 hover:scale-105">
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <Sparkles className="text-pink-400 mb-6" size={40} />
                  <h3 className="text-2xl font-semibold mb-4 font-serif">Creative Direction</h3>
                  <p className="text-slate-600 text-lg">Developing distinctive visual identities and content strategies that stand out beautifully.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
