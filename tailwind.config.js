/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        navAni: "navAni 1000ms ease-in-out",
        blink: "blink 1s infinite",
      },
      keyframes: {
        navAni: {
          from: {
            transform: "transform(0, -100%, 0)",
          },
          to: {
            transform: "transform(0, 0, 0)",
          },
        },

        blink: {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      fontFamily: {
        "Dancing-Script": ["Dancing Script", "cursive"],
        Lumanosimo: ["Lumanosimo", "cursive"],
      },
      colors: {
        firefly: "#091B28",
        // darkNavyGradient: "#004557",
        darkNavyGradient: "#005D70",
        // darkNavy: "#040817",
        // blue: "#01ABEE",
        // blue: "#30c2b6",
        // blue: "#22857B",
        turquoise: "#38DFBA",
        // aliceBlue: "#F0F8FF",
        // aliceBlue: "#AFC1D3",
        onahau: "#D2F5FF",
        ebonyClay: "#222d38;",

        satinLinen: "#EAE7DC",
        burntSienna: "#E85A4F",
        timberGreen: "#1C3334",
      },
      boxShadow: {
        nav: "0 1px 40px -15px  rgba(143, 215, 188, 0.3)",
        card: "1px 1px 8px  rgba(143, 215, 188, 0.3)",
        typeWriter: "inset 0 -1px 4px -2px rgba(137, 213, 185, 1)",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle, rgba(9,27,40,1) 0%, rgba(9,27,40,0.8940826330532213) 100%)",

        "linear-gradient": "bg-gradient-to-r from-darkNavy to-blue",
      },
    },
  },
  plugins: [],
};
