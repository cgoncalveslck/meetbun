/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: "#effaf2",
          100: "#d7f4dc",
          200: "#b3e7bf",
          300: "#81d49a",
          400: "#58be7a",
          500: "#2b9e55",
          600: "#1c7f42",
          700: "#166637",
          800: "#14512e",
          900: "#114327",
          950: "#092517",
        },
        shade: {
          50: "#f5f6f6",
          100: "#e5e7e8",
          200: "#cdd0d4",
          300: "#aaaeb6",
          400: "#808790",
          500: "#656c75",
          600: "#565a64",
          700: "#4a4d54",
          800: "#414349",
          900: "#3a3c3f",
          950: "#1f2023",
        },
      },
    },
  },
};
