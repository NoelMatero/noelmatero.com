const TechBadge = ({ name }: { name: string }) => {
  return (
    <div className="px-4 py-2 border border-[hsl(var(--grid-line))] font-mono text-xs text-muted-foreground hover:text-accent/80 hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 cursor-default bg-background">
      {name}
    </div>
  );
};

export default TechBadge;
