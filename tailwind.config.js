/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6e6f2',
          100: '#cdcde5',
          200: '#9b9bcc',
          300: '#6969b3',
          400: '#373799',
          500: '#040480', // Main brand blue
          600: '#04042c', // Footer dark blue
          700: '#030323',
          800: '#02021a',
          900: '#010111',
        },
        secondary: {
          50: '#fff9eb',
          100: '#ffecc6',
          200: '#ffd98a',
          300: '#ffc14d',
          400: '#ffa826',
          500: '#ff8c00', // Warm accent
          600: '#cc7000',
          700: '#995400',
          800: '#663800',
          900: '#331c00',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e6fe',
          300: '#7cd4fd',
          400: '#36befa',
          500: '#0ca5eb', // Modern blue accent
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'elegant': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
      },
    },
  },
  plugins: [],
};