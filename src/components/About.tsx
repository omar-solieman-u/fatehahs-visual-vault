
import { Sparkles, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              {/* Profile Image Placeholder with Creative Border */}
              <div className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-3xl rotate-6"></div>
              <div className="absolute inset-4 bg-slate-800 rounded-3xl -rotate-6 flex items-center justify-center">
                <div className="text-white/50 text-center">
                  <div className="text-6xl mb-4">👩‍💼</div>
                  <div>Profile Photo</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="text-white" size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center animate-pulse delay-1000">
              <Zap className="text-white" size={16} />
            </div>
          </div>

          <div className="text-white">
            <h2 className="text-5xl font-bold mb-6">
              Meet <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Fatehah</span>
            </h2>
            
            <p className="text-xl text-white/80 mb-6 leading-relaxed">
              I'm a passionate content creator and marketing executive who believes in the power of storytelling to build extraordinary brands. With expertise spanning from viral social media campaigns to comprehensive marketing strategies, I help businesses connect with their audiences in meaningful ways.
            </p>

            <p className="text-lg text-white/70 mb-8">
              My approach combines creative vision with data-driven insights, ensuring every piece of content not only looks amazing but delivers real results. From concept to execution, I craft experiences that resonate, engage, and convert.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Target className="text-pink-500 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Content Strategy</h3>
                <p className="text-white/70">Developing comprehensive content strategies that align with brand goals and audience needs.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Sparkles className="text-purple-500 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Brand Development</h3>
                <p className="text-white/70">Creating authentic brand voices and visual identities that stand out in crowded markets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
