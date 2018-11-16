"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Osoba = /** @class */ (function () {
    function Osoba(ime, prezime) {
        this._ime = ime;
        this._prezime = prezime;
    }
    Object.defineProperty(Osoba.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Osoba.prototype, "prezime", {
        get: function () {
            return this._prezime;
        },
        enumerable: true,
        configurable: true
    });
    return Osoba;
}());
exports.Osoba = Osoba;
