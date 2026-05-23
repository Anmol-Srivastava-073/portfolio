/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        space: '#02000f',
        surface: 'rgba(20, 15, 35, 0.4)',
        glass: 'rgba(255, 255, 255, 0.03)',
      },
      animation: {
        'aurora': 'aurora 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
