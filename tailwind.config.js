/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // --- AÑADE ESTO ---
      fontFamily: {
        'invisible': ['InvisibleSans', 'sans-serif'],
      },
      // ------------------
      keyframes: {
        'marquee-right': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        'marquee-right': 'marquee-right 18s linear infinite',
      },
    },
  },
  plugins: [],
}
