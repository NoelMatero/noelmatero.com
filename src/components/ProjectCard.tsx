import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
}

const ProjectCard = ({ title, description, tags, href, featured }: ProjectCardProps) => {
  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group block p-6 md:p-8 border border-[hsl(var(--grid-line))] hover-glow transition-all duration-200 h-full bg-background ${
        featured ? 'md:p-10' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 border border-[hsl(var(--grid-line-subtle))] text-muted-foreground group-hover:border-accent/30 group-hover:text-accent/80 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        {href && (
          <ArrowUpRight 
            className="w-4 h-4 text-muted-foreground group-hover:text-accent/80 transition-colors flex-shrink-0 ml-4" 
            strokeWidth={1.5}
          />
        )}
      </div>
      <h3 className={`font-medium text-foreground mb-3 group-hover:text-accent/90 transition-colors ${
        featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
      }`}>
        {title}
      </h3>
      <p className={`text-muted-foreground leading-relaxed ${
        featured ? 'text-base' : 'text-sm'
      }`}>
        {description}
      </p>
    </Wrapper>
  );
};

export default ProjectCard;
