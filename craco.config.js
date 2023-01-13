const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets/"),
      // components
      "@comp-app": path.resolve(__dirname, "src/components/app/"),
      "@comp-game": path.resolve(__dirname, "src/components/game/"),
      "@comp-pages": path.resolve(__dirname, "src/components/pages/"),
      "@comp-settings": path.resolve(__dirname, "src/components/settings/"),
      // common
      "@comm-consts": path.resolve(__dirname, "src/common/consts/"),
      "@comm-enums": path.resolve(__dirname, "src/common/enums/"),
      "@comm-helpers": path.resolve(__dirname, "src/common/helpers/"),
      "@comm-interfaces": path.resolve(__dirname, "src/common/interfaces/")
    },
  }
};
