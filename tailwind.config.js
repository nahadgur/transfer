/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
        space: ['var(--font-space)', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#ccff00',
        'accent-hover': '#b3e600',
      },
    },
  },
  plugins: [],
}
