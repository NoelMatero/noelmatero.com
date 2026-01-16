const GridBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Vertical lines only */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-6xl h-full flex px-6">
          <div className="flex-1 border-l border-[hsl(var(--grid-line-subtle))]" />
          <div className="flex-1 border-l border-[hsl(var(--grid-line-subtle))]" />
          <div className="flex-1 border-l border-[hsl(var(--grid-line-subtle))]" />
          <div className="flex-1 border-l border-r border-[hsl(var(--grid-line-subtle))]" />
        </div>
      </div>
    </div>
  );
};

export default GridBackground;
