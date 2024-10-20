/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#48B281', // Verde Principal
          light: '#38A169', // Tom mais claro de verde
          dark: '#276749', // Tom mais escuro de verde
        },
        secondary: {
          DEFAULT: '#F7FAFC', // Fundo cinza claro
          dark: '#504E4E', // Texto preto
        },
      },
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '100%',
        md: '728px',
        lg: '1024px',
        xl: '1080px',
        '2xl': '1200px',
      },
    },
  },
  plugins: [],
};
