/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#DBDBDB',
        offBlack: '#141414',
        offWhite: '#F0F0F0',
        primary: '#854DFF',
        smokeGray: '#716F6F',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
