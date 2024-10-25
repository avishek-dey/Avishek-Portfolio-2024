/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",    // Scans the root index.html
    "./src/**/*.{html,js}"],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        brand_color_1: '#5B63D3',  // Blue
        brand_color_2: '#9333EA',  // Purple
        brand_color_3: '#BCF739',  // Orange
        brand_color_4: '#F97316',  // Orange
        light_bg_1: '#fff',  // Slate Gray
        light_bg_2: '#E3E6EC',  // Light Gray for background
        dark_bg_1: '#0B0B14',  // Slate Gray
        dark_bg_2: '#1A1C2B',  // Light Gray for background
      },
      fontFamily: {
        sans: ['Instrument Sans, sans-serif'], // Main font
        serif: ['Instrument Serif, serif'], // Secondary font
      },
    },
  },
  plugins: [],
}