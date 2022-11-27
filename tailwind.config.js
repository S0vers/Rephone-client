/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4ade80",
          "secondary": "#38bdf8",
          "accent": "#fed7aa",
          "neutral": "#374151",
          "base-100": "#FFFFFF",
          "info": "#e879f9",
          "success": "#15803d",
          "warning": "#dc2626",
          "error": "#7f1d1d",
        }
      }
    ]
  },

  theme: {
    extend: {
    },
  },
  plugins: [require("daisyui")],
}
