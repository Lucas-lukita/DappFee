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
          accent: '#16502D',
          bg: '#F0F7F2', 
        }
      },
    },
  },
  plugins: [],
};
export default config;