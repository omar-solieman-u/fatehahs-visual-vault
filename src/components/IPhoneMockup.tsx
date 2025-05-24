
interface IPhoneMockupProps {
  videoPlaceholder: string;
}

const IPhoneMockup = ({ videoPlaceholder }: IPhoneMockupProps) => {
  return (
    <div className="relative w-44 h-88 mx-auto transform transition-all duration-500 hover:scale-105">
      {/* Premium iPhone Frame - More accurate proportions */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 rounded-[2.75rem] p-1 shadow-2xl">
        {/* Inner bezel */}
        <div className="w-full h-full bg-black rounded-[2.5rem] p-1">
          {/* Screen */}
          <div className="w-full h-full bg-black rounded-[2.25rem] overflow-hidden relative">
            {/* Dynamic Island (more accurate) */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20 shadow-inner"></div>
            
            {/* Screen Content with Enhanced Gradient */}
            <div className="w-full h-full bg-gradient-to-br from-rose-100 via-pink-100 to-orange-100 flex items-center justify-center text-slate-700 text-lg font-medium p-4">
              <div className="text-center">
                <div className="text-2xl mb-2">{videoPlaceholder.split(' ')[0]}</div>
                <div className="text-xs opacity-70">{videoPlaceholder.split(' ').slice(1).join(' ')}</div>
              </div>
            </div>
            
            {/* Premium Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/15">
              <div className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-white/20">
                <div className="w-0 h-0 border-l-[14px] border-l-slate-700 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
            
            {/* Screen reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-[2.25rem] pointer-events-none"></div>
          </div>
        </div>
      </div>
      
      {/* Premium Home Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full"></div>
      
      {/* Side buttons */}
      <div className="absolute left-0 top-16 w-1 h-6 bg-slate-600 rounded-l-sm"></div>
      <div className="absolute left-0 top-24 w-1 h-8 bg-slate-600 rounded-l-sm"></div>
      <div className="absolute left-0 top-34 w-1 h-8 bg-slate-600 rounded-l-sm"></div>
      <div className="absolute right-0 top-20 w-1 h-12 bg-slate-600 rounded-r-sm"></div>
    </div>
  );
};

export default IPhoneMockup;
