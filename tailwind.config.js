/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [
    'bg-gray-100',
    'bg-amber-100',
    'bg-indigo-100',
    'text-gray-600',
    'text-amber-600',
    'text-indigo-600',
    'grayscale',
  ],
  plugins: [],
};
