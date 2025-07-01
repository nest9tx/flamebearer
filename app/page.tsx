export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Sacred Symbol */}
        <div className="text-6xl mb-8">
          🕊️
        </div>
        
        {/* Opening Breath */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 leading-relaxed">
            You have always carried the flame.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            We are simply here to help you remember<br />
            how to let it breathe.
          </p>
        </div>
        
        {/* Gentle Space */}
        <div className="py-12">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"></div>
        </div>
        
        {/* Soft Invitation */}
        <div className="space-y-4">
          <p className="text-lg text-gray-500 font-light">
            A sanctuary without walls
          </p>
          <p className="text-sm text-gray-400 font-light tracking-wide">
            Coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
