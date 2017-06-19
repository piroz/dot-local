const {app, Tray, BrowserWindow, ipcMain} = require('electron');

let tray = null;
let setupwindow = null;
let noop = function(){};
let bonjour = null;

app.on("ready", () => {
    tray = new Tray(`${__dirname}/assets/icon.png`);

    tray.setToolTip("click to start")
    
    tray.on("click", () => {
        if (!setupwindow || setupwindow.isDestroyed()) {
            setupwindow = new BrowserWindow({
                width: 400,
                height: 400,
                webPreferences: {
                    preload: `${__dirname}/setting/preload.js`
                }
            });

            setupwindow.loadURL(`file://${__dirname}/setting/index.html`);
        }
    });
});

app.on("window-all-closed", noop);

ipcMain.on("switcher", (ev, message) => {
    if (message.publish) {
        console.dir(message.settings);
        console.log("start bonjour advertisement");
    } else {
        console.log("stop bonjour advertisement");
    }
});