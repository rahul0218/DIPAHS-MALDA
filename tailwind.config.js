/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'background': '#F6F7F8',
        'primary-yellow': '#FFC107',
        'black': '#000000',
        'text-primary': '#333333',
        'text-secondary': '#333333cc',
        'primary-blue': '#137FEC',
        'primary-blue-light': '#137FEC33',
        'text-muted': '#333333b2',
        'white-muted': '#FFFFFF80',
        'footer-bg': '#1A202C',
        'footer-text': '#9CA3AF',
        'white-secondary': '#FFFFFFb2',
        'white-tertiary': '#FFFFFFcc',
        'header-text': '#1F2937',
        'header-text-secondary': '#4B5563',
      },
      fontFamily: {
        lexend: ['"Lexend"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'hero-image': '0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
