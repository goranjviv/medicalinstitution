import {Doktor} from './Doktor';
import {Pacijent} from './Pacijent';
import {Pregledi} from './Pregledi';

function simulation() {

    let doktorMilan = new Doktor('Milan', 'Milanovic', 'Opsta praksa');
    let pacijentDragan = new Pacijent('Dragan', 'Draganovic', '8855858585', 'LO565464/55');
    
    pacijentDragan.izaberiDoktora(doktorMilan);
    
    let merenjeSecera: Pregledi.MerenjeSecera
        = <Pregledi.MerenjeSecera>doktorMilan.zakaziPregled(pacijentDragan, Pregledi.MerenjeSecera);

    let merenjePritiska: Pregledi.MerenjePritiska
        = <Pregledi.MerenjePritiska>doktorMilan.zakaziPregled(pacijentDragan, Pregledi.MerenjePritiska);

    pacijentDragan.obaviPregled(merenjeSecera);
    merenjeSecera.podesiVrednosti(6, new Date());

    pacijentDragan.obaviPregled(merenjePritiska);
    merenjePritiska.podesiVrednosti(120, 70, 75);


}

simulation();