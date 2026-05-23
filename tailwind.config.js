/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00e5ff',
        secondary: '#7c3aed',
        dark: '#050816',
        card: '#111827',
      },
    },
  },
  plugins: [],
}
