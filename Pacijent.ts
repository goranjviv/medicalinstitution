import {Osoba} from './Osoba';
import {Doktor} from './Doktor';
import {LabPregled} from './LabPregled';
import { log } from './globals';

export class Pacijent extends Osoba {
    private _jmbg: string;
    public get jmbg(): string {
        return this._jmbg;
    }
    private _brojKartona: string;
    public get brojKartona(): string {
        return this._brojKartona;
    }
    private _doktor: Doktor;
    public get doktor(): Doktor {
        return this._doktor;
    }
    private readonly _pregledArray: Array<LabPregled>;
    public get pregledArray() {
        return this._pregledArray;
    }

    constructor(
        ime: string,
        prezime: string,
        jmbg: string,
        brojKartona: string
    ) {
        super(ime, prezime);
        this._jmbg = jmbg;
        this._brojKartona = brojKartona;
        this._pregledArray = new Array<LabPregled>();
        log.info("Kreiran pacijent " + ime);
    }

    public izaberiDoktora(doktor: Doktor): void {
        this._doktor = doktor;
        doktor.pacijentArray.push(this);
        log.info("Pacijent " + this.ime + " bira doktora " + doktor.ime);
    }

    public obaviPregled(pregled: LabPregled): void {
        pregled.pregledaj();
        log.info("Pacijent " + this.ime + " je obavio pregled");
    }
}