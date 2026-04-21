import { useState, useEffect } from "react";
import { codeToHtml } from "shiki";
import type { ThemeRegistrationRaw } from "shiki";

const siteTheme: ThemeRegistrationRaw = {
  name: "site",
  type: "dark",
  colors: {
    "editor.background": "#000000",
    "editor.foreground": "#ffffffcc",
  },
  tokenColors: [
    {
      scope: [
        "comment",
        "comment.line",
        "comment.block",
        "punctuation.definition.comment",
      ],
      settings: { foreground: "#ffffff60" },
    },
    {
      scope: [
        "string",
        "string.quoted",
        "string.quoted.double",
        "string.quoted.single",
      ],
      settings: { foreground: "#86efac" }, // pastel green
    },
    {
      scope: ["constant.numeric", "constant.language"],
      settings: { foreground: "#fed7aa" }, // pastel peach
    },
    {
      scope: [
        "keyword",
        "keyword.control",
        "keyword.operator",
        "storage.type",
        "storage.modifier",
      ],
      settings: { foreground: "#c4b5fd" }, // pastel purple
    },
    {
      scope: ["entity.name.function", "meta.function-call"],
      settings: { foreground: "#fde68a" }, // pastel yellow
    },
    {
      scope: [
        "entity.name.type",
        "support.type",
        "support.class",
        "entity.name.class",
      ],
      settings: { foreground: "#f9a8d4" }, // pastel pink
    },
    {
      scope: [
        "meta.attribute",
        "entity.name.tag",
        "punctuation.definition.attribute",
      ],
      settings: { foreground: "#a5f3fc" }, // pastel cyan
    },
    {
      scope: ["variable", "variable.other"],
      settings: { foreground: "#e2e8f0" }, // soft white
    },
    {
      scope: [
        "punctuation",
        "meta.brace",
        "punctuation.brackets",
        "punctuation.definition.string",
        "punctuation.section.block",
        "punctuation.section.group",
        "punctuation.separator",
        "punctuation.terminator",
        "meta.group.braces",
      ],
      settings: { foreground: "#ffffff" },
    },
  ],
};

interface CodeBlockProps {
  language?: string;
  code: string;
}

const CodeBlock = ({ language = "text", code }: CodeBlockProps) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    codeToHtml(code, { lang: language, theme: siteTheme }).then(setHtml);
  }, [code, language]);

  if (!html)
    return (
      <pre className="p-4 text-sm leading-relaxed text-white/30 overflow-auto bg-black">
        <code>{code}</code>
      </pre>
    );

  return (
    <div
      className="text-sm overflow-auto [&>pre]:p-4 [&>pre]:leading-relaxed [&>pre]:!font-mono"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default CodeBlock;
