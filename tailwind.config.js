/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        black: '#050505',
        gray: {
          950: '#0a0a0a',
          900: '#121212',
          800: '#1f1f1f',
          700: '#2e2e2e',
          600: '#4b4b4b',
          500: '#707070',
          400: '#9e9e9e',
          300: '#c7c7c7',
          200: '#e0e0e0',
          100: '#f5f5f5',
          50: '#fafafa',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};