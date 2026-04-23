import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5">
      <a
        href="https://github.com/NoelMatero/"
        className="font-mono text-sm text-muted-foreground hover:text-foreground/80 transition-colors"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/matero-noel-70b414390"
        className="font-mono text-sm text-muted-foreground hover:text-foreground/80 transition-colors"
      >
        LinkedIn
      </a>
      {/* Twitter/X removed per request */}
    </div>
  );
};

export default SocialLinks;
