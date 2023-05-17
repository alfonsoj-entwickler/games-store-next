/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: { 
        'header-texture': "url('/public/images/header_img.jpg')",
      },
      fontFamily: {
        sans: ['var(--font-inter)']
      },
    },
  },
  plugins: [],
}
