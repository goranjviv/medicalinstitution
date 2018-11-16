export class Logger {
    private static _instance = undefined;
    public static get instance() {
        if (Logger._instance == undefined) {
            const Log = require('log');
            const fs = require('fs');
            Logger._instance = new Log('info', fs.createWriteStream('log.txt'));
        }
        return Logger._instance;
    }
}