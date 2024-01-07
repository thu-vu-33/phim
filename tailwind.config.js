module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        cyan: { A400: "#0feffd" },
        white: {
          A700_7f: "#ffffff7f",
          A700_33: "#ffffff33",
          A700_8c: "#ffffff8c",
          A700: "#ffffff",
        },
        red: {
          A400_7f: "#ff0e1e7f",
          A400: "#ff0e1e",
          A700: "#e50914",
          A700_0c: "#e509140c",
        },
        gray: {
          100: "#f5f5f5",
          200: "#ececec",
          300: "#e0e0e0",
          900: "#17161b",
          "900_cc": "#1d1d1dcc",
          "900_02": "#111111",
          "900_00": "#1d1d1d00",
          "900_01": "#1e1e1e",
          "900_7f": "#1d1d1d7f",
        },
        black: {
          900: "#0d0c11",
          "900_01": "#0f0d12",
          "900_dd": "#0c0c11dd",
          "900_05": "#0c0c1105",
          "900_a5": "#0c0c11a5",
          "900_cc": "#000000cc",
        },
        green: { A700: "#0de508" },
        blue_gray: { "900_a5": "#2c2c2ca5", "100_72": "#d7d7d772" },
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        montserrat: "Montserrat",
        roboto: "Roboto",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#1d1d1d00,#1d1d1dcc)",
        gradient1: "linear-gradient(270deg ,#0c0c11a5,#0c0c11dd)",
        gradient2: "linear-gradient(270deg ,#0c0c11dd,#0c0c11a5)",
      },
      boxShadow: {
        bs2: "0px 0px  60px 0px #ffffff33",
        bs3: "0px 0px  20px 0px #ff0e1e7f",
        bs: "0px 0px  25px 0px #ff0e1e7f",
        bs1: "0px 0px  250px 0px #e509140c",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
