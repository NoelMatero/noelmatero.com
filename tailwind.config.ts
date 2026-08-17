import type { Config } from "tailwindcss";

export default {
  // index.html is scanned too: the coin-flip script is the only place the
  // `light` class appears, and Tailwind purges rules whose classes it can't find.
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Geist Mono", "JetBrains Mono", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: "hsl(var(--accent))",
        muted: {
          foreground: "hsl(var(--muted-foreground))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
