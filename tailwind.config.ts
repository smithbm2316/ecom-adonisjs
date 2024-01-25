import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./resources/**/*.edge"],
  // if you end up adding any client-side components that you render in JSX, use this config instead
  // content: ["./resources/**/*.{edge,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
