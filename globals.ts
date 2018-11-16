const Log = require('log');
const fs = require('fs');
export const log = new Log('info', fs.createWriteStream('log.txt'));
