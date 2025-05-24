
import { Mail, MapPin, Phone, Instagram, Youtube, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-6 font-serif">
            Let's <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent italic">Create Together</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'd love to hear about your vision and explore how we can bring beautiful, meaningful stories to life together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 font-serif">Share Your Vision</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-600 text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/80 border border-white/60 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-rose-300 transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/80 border border-white/60 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-rose-300 transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/80 border border-white/60 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-rose-300 transition-colors"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-slate-600 text-sm font-medium mb-2">Project Type</label>
                <select className="w-full bg-white/80 border border-white/60 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:border-rose-300 transition-colors">
                  <option value="">What story shall we tell?</option>
                  <option value="content-creation">Content Creation</option>
                  <option value="brand-storytelling">Brand Storytelling</option>
                  <option value="creative-direction">Creative Direction</option>
                  <option value="social-strategy">Social Strategy</option>
                  <option value="consultation">Creative Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-600 text-sm font-medium mb-2">Your Vision</label>
                <textarea
                  rows={5}
                  className="w-full bg-white/80 border border-white/60 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-rose-300 transition-colors resize-none"
                  placeholder="Tell me about your dreams and aspirations..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-300 to-pink-400 text-white py-4 rounded-lg font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 font-serif">Ways to Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-rose-300 to-pink-400 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-semibold mb-1">Email</h4>
                    <p className="text-slate-600">hello@fatehah.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-emerald-300 to-teal-400 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-semibold mb-1">Phone</h4>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-amber-300 to-orange-400 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-semibold mb-1">Studio</h4>
                    <p className="text-slate-600">New York, NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 font-serif">Creative Journey</h3>
              
              <div className="flex gap-4 mb-4">
                <a
                  href="#"
                  className="bg-gradient-to-r from-pink-300 to-rose-400 w-12 h-12 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Instagram className="text-white" size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-red-300 to-red-400 w-12 h-12 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Youtube className="text-white" size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-blue-300 to-blue-400 w-12 h-12 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Linkedin className="text-white" size={20} />
                </a>
              </div>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                Follow along for daily inspiration, behind-the-scenes moments, and glimpses into the creative process that brings stories to life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-white/30 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-slate-800 mb-4 md:mb-0 font-serif italic">
              Fatehah
            </div>
            <div className="text-slate-500 text-sm">
              © 2024 Fatehah. Crafted with love and creativity.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
