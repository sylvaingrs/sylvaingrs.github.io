module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#1d4ed8",
        "color-secondary": "#f87171",
        "dark-color-primary": "slate-900",
        "dark-color-secondary": "slate-700",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
