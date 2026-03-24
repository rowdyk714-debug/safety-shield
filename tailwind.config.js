/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable manual dark mode toggle
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6ebf0',
          100: '#c0d0de',
          500: '#345277',
          800: '#1a2b42',
          900: '#0A1628', // Primary Brand Color
          950: '#050c18',
        },
        gold: {
          400: '#f7b955',
          500: '#F5A623', // Accent Brand Color
          600: '#d98a12',
        },
        alert: {
          500: '#E63946',
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
