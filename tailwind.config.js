/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#050505',      // Deepest black
        surface: '#121212',   // Solid dark gray for cards
        border: '#262626',    // Sharp 1px borders
        accent: '#6366f1',    // Sharp Indigo
        accentHover: '#818cf8',
        textMain: '#f5f5f5',
        textMuted: '#a3a3a3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'], // For tech-focused accents
      },
    },
  },
  plugins: [],
}
