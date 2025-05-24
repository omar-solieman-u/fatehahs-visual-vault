
import { Mail, MapPin, Phone, Instagram, Youtube, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Enhanced Background Parallax Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-52 h-52 bg-gradient-to-r from-rose-200 to-pink-300 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-44 h-44 bg-gradient-to-r from-lavender-200 to-purple-300 rounded-full opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gradient-to-r from-peach-200 to-coral-300 rounded-full opacity-25 animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-sky-200 to-blue-300 rounded-full opacity-20 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-slate-800 mb-8 font-serif leading-tight">
            Let's <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-peach-400 bg-clip-text text-transparent italic">Create Together</span>
          </h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            I'd love to hear about your vision and explore how we can bring beautiful, meaningful stories to life together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Enhanced Contact Form */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 border border-white/40 shadow-2xl">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 font-serif">Share Your Vision</h3>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-slate-600 text-lg font-medium mb-3">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/80 border border-white/60 rounded-2xl px-6 py-4 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-rose-300 transition-colors text-lg"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 text-lg font-medium mb-3">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/80 border border-white/60 rounded-2xl px-6 py-4 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-rose-300 transition-colors text-lg"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 text-lg font-medium mb-3">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/80 border border-white/60 rounded-2xl px-6 py-4 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-rose-300 transition-colors text-lg"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-slate-600 text-lg font-medium mb-3">Project Type</label>
                <select className="w-full bg-white/80 border border-white/60 rounded-2xl px-6 py-4 text-slate-700 focus:outline-none focus:border-rose-300 transition-colors text-lg">
                  <option value="">What story shall we tell?</option>
                  <option value="content-creation">Content Creation</option>
                  <option value="brand-storytelling">Brand Storytelling</option>
                  <option value="creative-direction">Creative Direction</option>
                  <option value="social-strategy">Social Strategy</option>
                  <option value="consultation">Creative Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-600 text-lg font-medium mb-3">Your Vision</label>
                <textarea
                  rows={6}
                  className="w-full bg-white/80 border border-white/60 rounded-2xl px-6 py-4 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-rose-300 transition-colors resize-none text-lg"
                  placeholder="Tell me about your dreams and aspirations..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-400 via-pink-400 to-peach-400 text-white py-5 rounded-2xl font-medium text-xl hover:scale-105 transition-transform duration-300 shadow-xl font-serif"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-10">
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 border border-white/40 shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-800 mb-8 font-serif">Ways to Connect</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-r from-rose-400 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-semibold mb-2 text-xl">Email</h4>
                    <p className="text-slate-600 text-lg">hello@fatehah.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-r from-lavender-400 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-semibold mb-2 text-xl">Phone</h4>
                    <p className="text-slate-600 text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-r from-peach-400 to-coral-500 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-semibold mb-2 text-xl">Studio</h4>
                    <p className="text-slate-600 text-lg">New York, NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 border border-white/40 shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-800 mb-8 font-serif">Creative Journey</h3>
              
              <div className="flex gap-6 mb-6">
                <a
                  href="#"
                  className="bg-gradient-to-r from-pink-400 to-rose-500 w-16 h-16 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl"
                >
                  <Instagram className="text-white" size={24} />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-red-400 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl"
                >
                  <Youtube className="text-white" size={24} />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-blue-400 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl"
                >
                  <Linkedin className="text-white" size={24} />
                </a>
              </div>
              
              <p className="text-slate-600 leading-relaxed text-lg">
                Follow along for daily inspiration, behind-the-scenes moments, and glimpses into the creative process that brings stories to life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="mt-24 border-t border-white/30 pt-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-3xl font-bold text-slate-800 mb-6 md:mb-0 font-serif italic">
              Fatehah
            </div>
            <div className="text-slate-500 text-lg">
              © 2024 Fatehah. Crafted with love and creativity.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
