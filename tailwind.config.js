/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#050505',
          blue: '#3B82F6',
          purple: '#7C3AED',
          'blue-light': '#60A5FA',
          'purple-light': '#A78BFA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #111827 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll': 'scroll 30s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(59,130,246,0.3)',
        'glow-purple': '0 0 40px rgba(124,58,237,0.3)',
        'glass': '0 8px 32px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
