const Terminal = () => {
  return (
    <div className="w-full border border-[hsl(var(--grid-line))] hover-border bg-background min-h-[400px]">      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[hsl(var(--grid-line))]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-3 text-xs text-muted-foreground font-mono">bash</span>
      </div>
      
      {/* Terminal content */}
      <div className="p-5 font-mono text-sm space-y-3">
        <div className="flex items-start gap-2">
          <span className="text-accent/80">~</span>
          <span className="text-foreground">whoami</span>
        </div>
        <div className="pl-4 text-muted-foreground">
          An 18-year-old builder 
        </div>
        
        <div className="flex items-start gap-2 pt-2">
          <span className="text-accent/80">~</span>
          <span className="text-foreground">ls skills/</span>
        </div>
        <div className="pl-4 text-muted-foreground flex flex-wrap gap-x-4 gap-y-1">
          <span>rust</span>
          <span>systems</span>
          <span>shipping-fast</span>
          <span>low-level</span>
        </div>

        <div className="flex items-start gap-2 pt-2">
          <span className="text-accent/80">~</span>
          <span className="cursor-blink text-foreground">_</span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
