/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-teal': '#008080',
        'soft-peach': '#FFAD99',
        'accent-pink': '#FF4F87',
        'text-dark': '#0F172A',
        'text-soft': '#475569',
        'bg-light': '#F5F7FA',
      },
    },
  },
  plugins: [],
}
