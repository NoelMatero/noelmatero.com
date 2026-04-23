interface StatCardProps {
  value: string;
  label: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="group p-6 md:p-8 text-center transition-all duration-200 hover:bg-[hsl(0,0%,3%)/80]">
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
