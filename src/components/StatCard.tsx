interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="group p-8 md:p-12 border-r border-b border-[hsl(var(--grid-line))] last:border-r-0 md:[&:nth-child(4)]:border-r-0 text-center bg-background transition-all duration-200 hover:bg-[hsl(0,0%,3%)]">
      <div className="text-3xl md:text-4xl font-medium text-foreground mb-2 transition-colors group-hover:text-accent/90">
        {value}
      </div>
      <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
