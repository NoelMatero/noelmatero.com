import React from "react";

interface CodeBlockProps {
  language?: string;
  code: string;
}

/** Very small, dependency-free highlighter for demo purposes.
 *  Not a full parser — just lightweight regex-based token coloring for Rust-like snippets.
 */
const CodeBlock: React.FC<CodeBlockProps> = ({ language = "text", code }) => {
  const escape = (str: string) =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const highlightRust = (src: string) => {
    let out = escape(src);

    // comments (// ...)
    out = out.replace(/(\/\/[^\n\r]*)/g, '<span class="text-muted-foreground">$1</span>');

    // attributes / macros like #[route(...)]
    out = out.replace(/(#\[[^\]]*\])/g, '<span class="text-pink-400">$1</span>');
    out = out.replace(/(\w+!)/g, '<span class="text-pink-400">$1</span>');

    // strings
    out = out.replace(/("([^"\\]|\\.)*")/g, '<span class="text-green-400">$1</span>');

    // numbers
    out = out.replace(/\b(\d+)\b/g, '<span class="text-orange-400">$1</span>');

    // common rust keywords
    out = out.replace(
      /\b(fn|let|mut|struct|enum|impl|trait|use|pub|crate|mod|as|if|else|match|return|loop|while|for|in|break|continue|const|static|where|type|unsafe|extern|move|ref|self|super|dyn|async|await|new)\b/g,
      '<span class="text-sky-400 font-medium">$1</span>'
    );

    // rudimentary function names (fn name)
    out = out.replace(/\bfn\s+([a-zA-Z_][\w]*)/g, 'fn <span class="text-amber-300">$1</span>');

    return out;
  };

  const html =
    language === "rust" ? highlightRust(code) : escape(code);

  return (
    <pre className="rounded-md bg-[#071226] p-4 overflow-auto text-sm leading-relaxed">
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </pre>
  );
};

export default CodeBlock;