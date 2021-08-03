const path = require("path")

module.exports = [
  config => {
    config.resolve.symlinks = false
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-router-dom": path.resolve("node_modules/react-router-dom"),
      react: path.resolve("node_modules/react")
    }
    return config
  }
