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
var LabPregled_1 = require("./LabPregled");
var Pregledi;
(function (Pregledi) {
    var MerenjeSecera = /** @class */ (function (_super) {
        __extends(MerenjeSecera, _super);
        function MerenjeSecera() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(MerenjeSecera.prototype, "vrednost", {
            get: function () {
                return this._vrednost;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MerenjeSecera.prototype, "vremeObroka", {
            get: function () {
                return this._vremeObroka;
            },
            enumerable: true,
            configurable: true
        });
        MerenjeSecera.prototype.podesiVrednosti = function (vrednost, vremeObroka) {
            this._vrednost = vrednost;
            this._vremeObroka = vremeObroka;
        };
        MerenjeSecera.prototype.pregledaj = function () { };
        ;
        return MerenjeSecera;
    }(LabPregled_1.LabPregled));
    Pregledi.MerenjeSecera = MerenjeSecera;
    var MerenjePritiska = /** @class */ (function (_super) {
        __extends(MerenjePritiska, _super);
        function MerenjePritiska() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(MerenjePritiska.prototype, "gornjaVrednostMmHg", {
            get: function () {
                return this._gornjaVrednostMmHg;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MerenjePritiska.prototype, "donjaVrednostMmHg", {
            get: function () {
                return this._donjaVrednostMmHg;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MerenjePritiska.prototype, "pulsBpm", {
            get: function () {
                return this._pulsBpm;
            },
            enumerable: true,
            configurable: true
        });
        MerenjePritiska.prototype.podesiVrednosti = function (gornjaVrednostMmHg, donjaVrednostMmHg, pulsBpm) {
            this._gornjaVrednostMmHg = gornjaVrednostMmHg;
            this._donjaVrednostMmHg = donjaVrednostMmHg;
            this._pulsBpm = pulsBpm;
        };
        MerenjePritiska.prototype.pregledaj = function () { };
        return MerenjePritiska;
    }(LabPregled_1.LabPregled));
    Pregledi.MerenjePritiska = MerenjePritiska;
    var MerenjeHolesterola = /** @class */ (function (_super) {
        __extends(MerenjeHolesterola, _super);
        function MerenjeHolesterola() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(MerenjeHolesterola.prototype, "vrednost", {
            get: function () {
                return this._vrednost;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MerenjeHolesterola.prototype, "vremeObroka", {
            get: function () {
                return this._vremeObroka;
            },
            enumerable: true,
            configurable: true
        });
        MerenjeHolesterola.prototype.podesiVrednosti = function (vrednost, vremeObroka) {
            this._vrednost = vrednost;
            this._vremeObroka = vremeObroka;
        };
        MerenjeHolesterola.prototype.pregledaj = function () {
        };
        return MerenjeHolesterola;
    }(LabPregled_1.LabPregled));
    Pregledi.MerenjeHolesterola = MerenjeHolesterola;
})(Pregledi = exports.Pregledi || (exports.Pregledi = {}));
