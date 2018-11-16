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
var Logger_1 = require("./Logger");
var Doktor = /** @class */ (function (_super) {
    __extends(Doktor, _super);
    function Doktor(ime, prezime, specijalnost) {
        var _this = _super.call(this, ime, prezime) || this;
        _this._specijalnost = specijalnost;
        _this._pacijentArray = new Array();
        _this._pregledArray = new Array();
        Logger_1.Logger.instance.info("Kreiran doktor " + ime);
        return _this;
    }
    Object.defineProperty(Doktor.prototype, "specijalnost", {
        get: function () {
            return this._specijalnost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Doktor.prototype, "pacijentArray", {
        get: function () {
            return this._pacijentArray;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Doktor.prototype, "pregledArray", {
        get: function () {
            return this._pregledArray;
        },
        enumerable: true,
        configurable: true
    });
    Doktor.prototype.zakaziPregled = function (pacijent, klasaPregleda) {
        var noviPregled = new klasaPregleda(new Date(), this, pacijent);
        this.pregledArray.push(noviPregled);
        pacijent.pregledArray.push(noviPregled);
        return noviPregled;
    };
    return Doktor;
}(Osoba_1.Osoba));
exports.Doktor = Doktor;
