const packager = require("electron-packager");  
const config = require("./config.js");

packager(config, function done (err, appPath) {
  if(err) {
    throw new Error(err);
  }
  console.log("Done!!");
});
