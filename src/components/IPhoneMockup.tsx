
interface IPhoneMockupProps {
  videoPlaceholder: string;
}

const IPhoneMockup = ({ videoPlaceholder }: IPhoneMockupProps) => {
  return (
    <div className="relative w-32 h-64 mx-auto">
      {/* iPhone Frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-300 to-slate-400 rounded-3xl p-1 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-black rounded-3xl overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-black rounded-full z-10"></div>
          
          {/* Screen Content */}
          <div className="w-full h-full bg-gradient-to-br from-rose-200 via-sky-200 to-amber-200 flex items-center justify-center text-slate-700 text-lg font-medium">
            {videoPlaceholder}
          </div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="w-8 h-8 bg-white/95 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-0 h-0 border-l-[8px] border-l-slate-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-slate-300 rounded-full"></div>
    </div>
  );
};

export default IPhoneMockup;
