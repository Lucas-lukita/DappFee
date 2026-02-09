import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        agro: {
          primary: '#10B981', // Verde vibrante (Emerald-500)
          dark: '#064E3B',    // Verde escuro institucional (Emerald-900)
          light: '#D1FAE5',   // Verde fundo claro (Emerald-100)
          earth: '#78350F',   // Tom terroso (Amber-900)
        }
      },
    },
  },
  plugins: [],
};
export default config;