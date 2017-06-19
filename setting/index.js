window.jQuery = window.$ = require("jquery");
const {ipcRenderer} = require('electron');

class Switcher {
    constructor() {
        $("#enable").on("click", (ev) => {
            this.enable();
        });

        $("#disable").on("click", (ev) => {
            this.disable();
        });
    }

    enable() {
        
        var settings = [];

        for (var i = 0, m = rows.length; i < m; i++) {
            settings.push({
                prefix: rows[i].prefix,
                type: rows[i].type,
                port: 80
            });
        }
        ipcRenderer.send("switcher", {
            publish: true,
            settings: settings
        });
    }

    disable() {
        ipcRenderer.send("switcher", {
            publish: false
        });
    }
}

class PlusButton {
    constructor() {
        this.table = $("#settings");

        $("#plus").on("click", (ev) => {
            this.appendRow();
        });
    }

    appendRow() {
        var setting = new SettingRow();

        this.table.append(setting.element);

        rows.push(setting);
    }
}

class SettingRow {
    constructor() {
        this.element = $('<tr>');
        this.prefixInput = $(`<input type="text">`);
        this.typeInput = $(`<input type="text">`);
        this.element.append(this.prefixInput.wrap("<td/>"));
        this.element.append(this.typeInput.wrap("<td/>"));
    }

    __set(key, val) {
        this[key].val(val);
    }

    __get(key) {
        return this[key].val();
    }

    set prefix(val) {
        this.__set('prefixInput', val);
    }

    get prefix() {
        return this.__get('prefixInput');
    }

    set type(val) {
        this.__set('typeInput', val);
    }

    get type() {
        this.__get('typeInput');
    }
}


var rows = [];
var switcher = new Switcher();
var plusbutton = new PlusButton();