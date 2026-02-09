import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        agro: {
          primary: '#10B981', // Verde Esmeralda
          dark: '#064E3B',    // Verde Escuro
          light: '#D1FAE5',   // Verde Claro
          earth: '#78350F',   // Marrom Terra
        }
      },
    },
  },
  plugins: [],
};
export default config;