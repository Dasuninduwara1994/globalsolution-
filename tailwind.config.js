/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0a0b',
          900: '#0f0f11',
          850: '#141417',
          800: '#1a1a1f',
          700: '#26262e',
          600: '#3a3a44',
          500: '#5a5a68',
          400: '#8a8a98',
          300: '#b8b8c4',
          200: '#d8d8e0',
          100: '#eeeeee',
          50: '#f8f8fa',
        },
        accent: {
          DEFAULT: '#ff4d2e',
          50: '#fff3f0',
          100: '#ffe0d8',
          200: '#ffbfa8',
          300: '#ff9d78',
          400: '#ff7a48',
          500: '#ff4d2e',
          600: '#e63d20',
          700: '#cc3015',
          800: '#a32610',
          900: '#7a1c0c',
        },
      },
      fontFamily: {
        display: ['"Clash Display"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 10vw, 9rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'section': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
      },
      animation: {
        'gradient-shift': 'gradient-shift 12s ease infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
