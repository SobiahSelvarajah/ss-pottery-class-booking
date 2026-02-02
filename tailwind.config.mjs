/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  safelist: [
    "bg-clay-brown",
    "bg-clay-dark",
    "bg-clay-sand",
    "bg-clay-light",
    "text-neutral-white",
    "text-neutral-dark",
  ],

  theme: {
    extend: {
      // custom colors
      colors: {
        clay: {
          brown: "#A2672D",
          dark: "#5B4D43",
          sand: "#E0BE9A",
          light: "#FFF8F1",
        },
        neutral: {
          black: "#000000",
          dark: "#404040",
          mid: "#808080",
          light: "#D2D2D2",
          white: "#FFFFFF",
        },
      },

      // fonts
      // montserrat for headings
      // helvetica for paragraphs
      fontFamily: {
        heading: ["var(--font-montserrat)","sans-serif"],
        body: ["Helvetica","Arial", "sans-serif"],
      },
    },
  },
};
