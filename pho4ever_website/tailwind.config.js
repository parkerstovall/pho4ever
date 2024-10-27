import plugin from "tailwindcss/plugin";

export const theme = {
  extend: {
    textShadow: {
      sm: "0 0 2px var(--tw-shadow-color)",
      DEFAULT: "0 0 4px black",
      lg: "0 0 16px var(--tw-shadow-color)",
    },
  },
};
export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "text-shadow": (value) => ({
          textShadow: value,
        }),
      },
      { values: theme("textShadow") }
    );
  }),
];
