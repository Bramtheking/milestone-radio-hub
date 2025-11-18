const RadioPlayer = () => {
  return (
    <div className="radio-player max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">MILESTONE RADIO</h1>
        <p className="text-white/90 text-lg">Live Educational Broadcasting</p>
        <div className="inline-flex items-center space-x-2 mt-2 px-4 py-2 bg-white/20 rounded-full">
          <div className="w-3 h-3 bg-milestone-red rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">LIVE ON AIR</span>
        </div>
      </div>
      
      {/* Manual Play Instructions */}
      <div className="bg-gradient-to-r from-milestone-blue/10 via-milestone-cyan/5 to-milestone-blue/10 rounded-xl p-4 max-w-lg mx-auto border border-milestone-blue/20 mb-6">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-2 h-2 bg-milestone-blue rounded-full animate-pulse"></div>
          <p className="text-milestone-navy font-semibold text-lg">
            🎧 Click the play button below to start listening
          </p>
          <div className="w-2 h-2 bg-milestone-blue rounded-full animate-pulse"></div>
        </div>
        <p className="text-white text-sm mt-2 text-center">
          Ready to tune in? Press play and enjoy our educational programming!
        </p>
      </div>
      
      {/* Radio iframe with autoplay */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-lg">
        <iframe 
          src="https://a4.asurahosting.com/public/milestone/embed?theme=light"
          frameBorder="0" 
          allowTransparency={true}
          allow="autoplay"
          className="w-full min-h-[200px] rounded-lg"
          title="Milestone Radio Player"
        />
      </div>
    </div>
  );
};
export default RadioPlayer;
