/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f4f1ea',
        ink: '#1a1a1a',
        markerRed: '#ff4d4d',
        markerBlue: '#3b82f6',
        markerYellow: '#ffd700',
      },
      fontFamily: {
        manga: ['"M PLUS Rounded 1c"', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
        marker: ['"Permanent Marker"', 'cursive'],
      },
      boxShadow: {
        'sketch': '6px 6px 0px 0px #1a1a1a',
        'sketch-hover': '2px 2px 0px 0px #1a1a1a',
      }
    },
  },
  plugins: [],
}
