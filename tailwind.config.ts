export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      sans: ["Figtree Variable", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        cityhop: {
          primary: "#fff",
          secondary: "#555",
          accent: "#EAB308",
          neutral: "#222",
          "base-100": "#000",
          info: "#9AD7EF",
          success: "#15754E",
          warning: "#FBB656",
          error: "#F27391",
        },
      },
    ],
    base: true,
    utils: true,
  }
};
