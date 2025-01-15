/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f8',
          100: '#d9e1ed',
          200: '#b3c3db',
          300: '#8da5c9',
          400: '#6687b7',
          500: '#4069a5',
          600: '#334f84',
          700: '#263b63',
          800: '#1a2742',
          900: '#0d1321',
        },
        brown: {
          50: '#faf6f3',
          100: '#f0e6df',
          200: '#e1ccbf',
          300: '#d2b39f',
          400: '#c39a7f',
          500: '#b4815f',
          600: '#96674c',
          700: '#714d39',
          800: '#4b3326',
          900: '#261a13',
        },
      },
    },
  },
  plugins: [],
};