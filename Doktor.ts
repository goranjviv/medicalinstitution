import {Osoba} from './Osoba';
import {Pacijent} from './Pacijent';
import { LabPregled } from './LabPregled';
import { Logger } from './Logger';

export class Doktor extends Osoba {
    private _specijalnost: string;
    public get specijalnost(): string {
        return this._specijalnost;
    }
    private readonly _pacijentArray: Array<Pacijent>;
    public get pacijentArray(): Array<Pacijent> {
        return this._pacijentArray;
    }
    private readonly _pregledArray: Array<LabPregled>;
    public get pregledArray(): Array<LabPregled> {
        return this._pregledArray;
    }


    constructor(
        ime: string,
        prezime: string,
        specijalnost: string
    ) {
        super(ime, prezime);
        this._specijalnost = specijalnost;
        this._pacijentArray = new Array<Pacijent>();
        this._pregledArray = new Array<LabPregled>();
        Logger.instance.info("Kreiran doktor " + ime);
    }

    public zakaziPregled(pacijent: Pacijent, klasaPregleda): LabPregled {
        let noviPregled: LabPregled = new klasaPregleda(new Date(), this, pacijent);
        this.pregledArray.push(noviPregled);
        pacijent.pregledArray.push(noviPregled);
        return noviPregled;
    }

}