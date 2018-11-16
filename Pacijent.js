"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Osoba_1 = require("./Osoba");
var globals_1 = require("./globals");
var Pacijent = /** @class */ (function (_super) {
    __extends(Pacijent, _super);
    function Pacijent(ime, prezime, jmbg, brojKartona) {
        var _this = _super.call(this, ime, prezime) || this;
        _this._jmbg = jmbg;
        _this._brojKartona = brojKartona;
        _this._pregledArray = new Array();
        globals_1.log.info("Kreiran pacijent " + ime);
        return _this;
    }
    Object.defineProperty(Pacijent.prototype, "jmbg", {
        get: function () {
            return this._jmbg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pacijent.prototype, "brojKartona", {
        get: function () {
            return this._brojKartona;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pacijent.prototype, "doktor", {
        get: function () {
            return this._doktor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pacijent.prototype, "pregledArray", {
        get: function () {
            return this._pregledArray;
        },
        enumerable: true,
        configurable: true
    });
    Pacijent.prototype.izaberiDoktora = function (doktor) {
        this._doktor = doktor;
        doktor.pacijentArray.push(this);
        globals_1.log.info("Pacijent " + this.ime + " bira doktora " + doktor.ime);
    };
    Pacijent.prototype.obaviPregled = function (pregled) {
        pregled.pregledaj();
        globals_1.log.info("Pacijent " + this.ime + " je obavio pregled");
    };
    return Pacijent;
}(Osoba_1.Osoba));
exports.Pacijent = Pacijent;
