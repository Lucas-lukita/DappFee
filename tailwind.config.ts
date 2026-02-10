import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        agro: {
          primary: '#1B2C1B', // Verde Esmeralda
          accent: '#C5A059',
          bg: '#F4F7F5 ', 
        }
      },
    },
  },
  plugins: [],
};
export default config;