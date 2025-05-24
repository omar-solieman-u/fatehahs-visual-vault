
interface IPhoneMockupProps {
  videoPlaceholder: string;
  project?: {
    title: string;
    category: string;
    client: string;
    views: string;
    details: string;
  };
}

const IPhoneMockup = ({ videoPlaceholder, project }: IPhoneMockupProps) => {
  return (
    <div className="group relative mx-auto transform transition-all duration-500 hover:scale-105">
      {/* iPhone Frame using provided structure */}
      <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
        {/* Dynamic Island */}
        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        
        {/* Side buttons */}
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        
        {/* Screen */}
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gradient-to-br from-rose-100 via-pink-100 to-orange-100 relative">
          {/* Screen Content */}
          <div className="w-full h-full flex items-center justify-center text-slate-700 text-lg font-medium p-6">
            <div className="text-center">
              <div className="text-3xl mb-3">{videoPlaceholder.split(' ')[0]}</div>
              <div className="text-sm opacity-70">{videoPlaceholder.split(' ').slice(1).join(' ')}</div>
            </div>
          </div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
              <div className="w-0 h-0 border-l-[16px] border-l-slate-700 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
            </div>
          </div>
          
          {/* Hover overlay with project info */}
          {project && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[2rem] flex flex-col justify-end p-6">
              <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block bg-gradient-to-r from-rose-400 to-pink-500 text-white text-xs px-3 py-1 rounded-full mb-2 font-medium">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-xs opacity-80 italic mb-1">{project.client}</p>
                <p className="text-xs opacity-90 mb-2">{project.details}</p>
                <div className="flex justify-between items-center text-xs">
                  <span className="opacity-80">Views</span>
                  <span className="text-pink-300 font-bold">{project.views}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IPhoneMockup;
