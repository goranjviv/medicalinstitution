"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LabPregled = /** @class */ (function () {
    function LabPregled(datumIVreme, doktor, pacijent) {
        this.datumIVreme = datumIVreme;
        this.doktor = doktor;
        this.pacijent = pacijent;
    }
    LabPregled.prototype.pregledaj = function () { this.pregledan = true; };
    ;
    return LabPregled;
}());
exports.LabPregled = LabPregled;
