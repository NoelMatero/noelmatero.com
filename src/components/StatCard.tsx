interface StatCardProps {
  value: string;
  label: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="group p-6 md:p-4 text-center transition-all duration-200 hover:bg-[hsl(0,0%,3%)/80]">      
      <div className="font-mono text-[15px] text-muted-foreground uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
