import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const links = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-1">
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-3 text-muted-foreground hover:text-foreground/70 transition-colors duration-200"
        >
          <Icon className="w-4 h-4" strokeWidth={1.5} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
