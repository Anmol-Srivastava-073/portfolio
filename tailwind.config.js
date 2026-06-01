/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc', // Light slate background
        surface: '#ffffff',
        primary: '#6366f1', // Indigo
        secondary: '#8b5cf6', // Violet
        textMain: '#1e293b', 
        textMuted: '#64748b', 
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(99, 102, 241, 0.4)',
      }
    },
  },
  plugins: [],
}
