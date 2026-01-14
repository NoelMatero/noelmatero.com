const GridBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Vertical lines */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-6xl h-full flex">
          <div className="flex-1 border-l border-[hsl(var(--grid-line-subtle))]" />
          <div className="flex-1 border-l border-[hsl(var(--grid-line-subtle))]" />
          <div className="flex-1 border-l border-[hsl(var(--grid-line-subtle))]" />
          <div className="flex-1 border-l border-r border-[hsl(var(--grid-line-subtle))]" />
        </div>
      </div>

      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 50%)'
        }}
      />

      {/* Bottom fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: 'linear-gradient(to top, hsl(0 0% 0%) 0%, transparent 100%)'
        }}
      />
    </div>
  );
};

export default GridBackground;
