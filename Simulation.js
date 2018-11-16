"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Doktor_1 = require("./Doktor");
var Pacijent_1 = require("./Pacijent");
var Pregledi_1 = require("./Pregledi");
function simulation() {
    var doktorMilan = new Doktor_1.Doktor('Milan', 'Milanovic', 'Opsta praksa');
    var pacijentDragan = new Pacijent_1.Pacijent('Dragan', 'Draganovic', '8855858585', 'LO565464/55');
    pacijentDragan.izaberiDoktora(doktorMilan);
    var merenjeSecera = doktorMilan.zakaziPregled(pacijentDragan, Pregledi_1.Pregledi.MerenjeSecera);
    var merenjePritiska = doktorMilan.zakaziPregled(pacijentDragan, Pregledi_1.Pregledi.MerenjePritiska);
    pacijentDragan.obaviPregled(merenjeSecera);
    merenjeSecera.podesiVrednosti(6, new Date());
    pacijentDragan.obaviPregled(merenjePritiska);
    merenjePritiska.podesiVrednosti(120, 70, 75);
}
simulation();
