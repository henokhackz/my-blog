/** @type {import('tailwindcss').Config} */
module.exports = {
  darkmode: "dark",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-blue":
          "linear-gradient(90deg, #1D4ED8 0%, #3B82F6 50%, #60A5FA 100%)",
        "gradient-blue፟፟፟-hover":
          "linear-gradient(90deg, #1D4ED8 20%, #3B82F6 60%, #60A5FA 100%)",
      },
    },
  },
  plugins: [],
};
