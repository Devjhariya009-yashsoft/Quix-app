const { getDefaultConfig } = require("expo/metro-config");
const exclusionList = require("metro-config/src/defaults/exclusionList");

const config = getDefaultConfig(__dirname);

config.resolver.blockList = exclusionList([
  /android[\/\\].*build[\/\\].*/,
  /node_modules[\/\\].*[\/\\]android[\/\\].*build[\/\\].*/,
  /.*\.zip/,
  /backup\.zip/,
  /bakup\.zip/,
  /emulator_screen\.png/,
]);

module.exports = config;
