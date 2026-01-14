const StatusBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[hsl(var(--grid-line))] font-mono text-xs tracking-wide bg-background">
      <span className="w-1.5 h-1.5 rounded-full bg-accent/80 animate-pulse" />
      <span className="text-muted-foreground uppercase">Available</span>
    </div>
  );
};

export default StatusBadge;
