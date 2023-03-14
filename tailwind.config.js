/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#0A2647',
        'sea-blue' : '#144272',
        'mute-blue' : '#205295',
        'light-blue' : '#2C74B3',
        'light-navy-blue' : '#0F3A69',
      },
    }
  },
  plugins: [],
}