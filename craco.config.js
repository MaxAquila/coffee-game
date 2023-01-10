const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets/"),
      // components
      "@comp-app": path.resolve(__dirname, "src/components/app/"),
      "@comp-game": path.resolve(__dirname, "src/components/game/"),
      "@comp-main": path.resolve(__dirname, "src/components/main/"),
      // common
      "@comm-enums": path.resolve(__dirname, "src/common/enums/"),
      "@comm-helpers": path.resolve(__dirname, "src/common/helpers/"),
      "@comm-interfaces": path.resolve(__dirname, "src/common/interfaces/")
    },
  }
};
