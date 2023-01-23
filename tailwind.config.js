module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      margin: {
        '-85px': '-85px',
      },
      colors: {
        "premier-primary": "#37003c",
        "premier-rose": "#ff2882",
        "premier-green": "#01fc9c",
        "premier-light-blue": "#04e2ef",
      },
      backgroundImage: {
        main: "url('https://pbs.twimg.com/media/FZYWon8aMAEFAzW.jpg:large')",
        footer:
          "url('https://ui.dmpcdn.com/tvbox-web-cdn/imgs/bg/epl-bg-horizontal-new-01.jpg')",
      },
    },
  },
  plugins: [],
};
