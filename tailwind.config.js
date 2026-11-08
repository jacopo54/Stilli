/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050506',
          900: '#0a0a0c',
          850: '#0e0e12',
          800: '#131318',
          700: '#1b1b22',
          600: '#26262f',
        },
        vanta: {
          50: '#f5f0ff',
          100: '#ede4ff',
          200: '#dcc9ff',
          300: '#c4a3ff',
          400: '#a855f7',
          500: '#9333ea',
          600: '#7e22ce',
          700: '#6520a8',
          800: '#4c1d7a',
          900: '#3b1663',
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'scroll-x': 'scrollX 30s linear infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-24px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 20px -4px rgba(168, 85, 247, 0.5)',
        'glow': '0 0 40px -8px rgba(168, 85, 247, 0.6)',
        'glow-lg': '0 0 60px -10px rgba(168, 85, 247, 0.7)',
        'glow-xl': '0 0 100px -20px rgba(168, 85, 247, 0.5)',
      },
    },
  },
  plugins: [],
};
