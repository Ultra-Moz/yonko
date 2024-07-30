/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        recursive: ["Recursive", "sans-sarif"],
      },
      colors: {
        black: "#000000",
        borderColor: "#1F1F1F",
        grayColor: "#969696",
        bgColor: "#121212",
        orange: "#E93C00",
        green: "28CD41",
      },
    },
  },
  plugins: [],
};
