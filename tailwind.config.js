/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        medieval: ['MedievalSharp', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
      },
      colors: {
        parchment: '#f4e4bc',
        leather: {
          light: '#8b5e34',
          DEFAULT: '#704214',
          dark: '#2C1810',
        },
        mystic: {
          100: '#e0e7ff',
          500: '#6366f1',
          900: '#312e81',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};