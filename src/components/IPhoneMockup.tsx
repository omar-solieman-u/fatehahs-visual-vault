
interface IPhoneMockupProps {
  videoPlaceholder: string;
}

const IPhoneMockup = ({ videoPlaceholder }: IPhoneMockupProps) => {
  return (
    <div className="relative w-40 h-80 mx-auto transform transition-all duration-500 hover:scale-105">
      {/* Enhanced iPhone Frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-300 to-slate-500 rounded-[2.5rem] p-2 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-black rounded-[2.25rem] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-black rounded-full z-10"></div>
          
          {/* Screen Content with Enhanced Gradient */}
          <div className="w-full h-full bg-gradient-to-br from-rose-200 via-pink-200 to-peach-200 flex items-center justify-center text-slate-700 text-xl font-medium">
            {videoPlaceholder}
          </div>
          
          {/* Enhanced Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110">
              <div className="w-0 h-0 border-l-[12px] border-l-slate-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Home Indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-slate-400 rounded-full"></div>
    </div>
  );
};

export default IPhoneMockup;
