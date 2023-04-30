module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: { backgroundImage: {
      'favicon': "url('./assets/favicon.svg')",
      'logo': "url('./assets/notchpay.svg')",
    },
      colors: {
        primary: {
            50: "#f4f9f7",
            100: "#e9f3f0",
            200: "#c7e0d9",
            300: "#a5cdc2",
            400: "#62a894",
            500: "#1f8366",
            600: "#1c765c",
            700: "#17624d",
            800: "#134f3d",
            900: "#0f4032",
        },
        secondary: {
            50: "#f5f5f6",
            100: "#ebebed",
            200: "#cdcdd3",
            300: "#afafb8",
            400: "#737483",
            500: "#37384e",
            600: "#323246",
            700: "#292a3b",
            800: "#21222f",
            900: "#1b1b26",
        },
    }
    },
  },
  plugins: [],
}