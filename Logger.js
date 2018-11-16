"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Object.defineProperty(Logger, "instance", {
        get: function () {
            if (Logger._instance == undefined) {
                var Log = require('log');
                var fs = require('fs');
                Logger._instance = new Log('info', fs.createWriteStream('log.txt'));
            }
            return Logger._instance;
        },
        enumerable: true,
        configurable: true
    });
    Logger._instance = undefined;
    return Logger;
}());
exports.Logger = Logger;
