const npmconfig = require("../package.json");

const config = {
  dir: __dirname + '/../',
  out: __dirname + '/dist',
  name: npmconfig.name,
  platform: 'darwin',
  arch: 'x64',
  electronVersion: '1.6.11',
  appBundleId: 'me.muraka.' + npmconfig.name,
  appVersion: npmconfig.version,
  appCopyright: "© 2017 piroz.",
  overwrite: true,
  asar: true,
  prune: true,
  // 無視ファイル
  ignore: "node_modules/(electron-packager|electron-prebuilt|\.bin)|packager",
};

module.exports = config;