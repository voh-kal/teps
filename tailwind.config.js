/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aileron': ['Aileron', 'sans-serif'],
      },
      animation: {
  'infinite-scroll': 'infinite-scroll 40s linear infinite',
  'infinite-scroll-md': 'infinite-scroll-md 40s linear infinite',
},
keyframes: {
  'infinite-scroll': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(-3000px)' },
  },
  'infinite-scroll-md': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(-3750px)' },
  }
}
    },
  },
  plugins: [],
}