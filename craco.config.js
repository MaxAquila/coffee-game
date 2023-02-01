const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets/"),
      // components
      "@comp-app": path.resolve(__dirname, "src/components/app/"),
      "@comp-common": path.resolve(__dirname, "src/components/common/"),
      "@comp-game": path.resolve(__dirname, "src/components/game/"),
      "@comp-pages": path.resolve(__dirname, "src/components/pages/"),
      "@comp-settings": path.resolve(__dirname, "src/components/settings/"),
      "@comp-tests": path.resolve(__dirname, "src/components/tests/"),
      // common
      "@comm-consts": path.resolve(__dirname, "src/common/consts/"),
      "@comm-enums": path.resolve(__dirname, "src/common/enums/"),
      "@comm-helpers": path.resolve(__dirname, "src/common/helpers/"),
      "@comm-hooks": path.resolve(__dirname, "src/common/hooks/"),
      "@comm-interfaces": path.resolve(__dirname, "src/common/interfaces/"),
      "@comm-redux": path.resolve(__dirname, "src/common/redux/")
    },
  }
};
