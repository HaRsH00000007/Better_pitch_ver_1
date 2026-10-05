/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Anton', 'Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#FF5C28',
          'orange-dark': '#E04818',
          glow: '#FF7744',
          dark: '#0A0D14',
          card: 'rgba(255, 255, 255, 0.06)',
          border: 'rgba(255, 255, 255, 0.12)',
        }
      },
      boxShadow: {
        'glow': '0 0 50px -10px rgba(255, 92, 40, 0.35)',
        'card': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        'nav': '0 10px 30px -10px rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
