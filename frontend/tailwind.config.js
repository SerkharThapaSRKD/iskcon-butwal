/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'iskcon-orange': '#F05A28', // Deeper, more vibrant saffron
        'iskcon-yellow': '#FDB813', // Bright, joyful sun yellow
        'iskcon-gold': '#D4AF37',   // Elegant, professional gold
        'iskcon-red': '#8A1538',    // Deep maroon for professional grounding
        'iskcon-cream': '#FFFDF7',  // Very soft, warm background
        'iskcon-dark': '#2C1B18',   // Rich dark brown instead of sterile gray
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        heading: ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'mandala-pattern': "url('https://www.transparenttextures.com/patterns/floral-deco.png')",
      }
    },
  },
  plugins: [],
}
