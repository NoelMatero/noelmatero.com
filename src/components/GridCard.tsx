import { ArrowUpRight } from "lucide-react";

interface GridCardProps {
  label: string;
  title: string;
  description: string;
  href?: string;
}

const GridCard = ({ label, title, description, href }: GridCardProps) => {
  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group block p-6 border border-[hsl(var(--grid-line))] hover-glow transition-all duration-200 bg-background"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest group-hover:text-accent/70 transition-colors">
          {label}
        </span>
        {href && (
          <ArrowUpRight 
            className="w-4 h-4 text-muted-foreground group-hover:text-accent/70 transition-colors" 
            strokeWidth={1.5}
          />
        )}
      </div>
      <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-accent/90 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Wrapper>
  );
};

export default GridCard;
