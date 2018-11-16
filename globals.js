"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Log = require('log');
var fs = require('fs');
exports.log = new Log('info', fs.createWriteStream('log.txt'));
