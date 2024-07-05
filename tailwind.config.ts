import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0", // Fixed: value should be a string
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1", // Fixed: value should be a string
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function flattenColorPalette(colors: Record<string, string | Record<string, string>>): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [color, values] of Object.entries(colors)) {
    if (typeof values === "string") {
      result[color] = values;
    } else {
      for (const [shade, hex] of Object.entries(values)) {
        result[`${color}-${shade}`] = hex;
      }
    }
  }

  return result;
}

function addVariablesForColors({ addBase, theme }: { addBase: (arg0: Record<string, Record<string, string>>) => void, theme: (arg0: string) => Record<string, string | Record<string, string>> }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
