import {Osoba} from './Osoba';
import {Doktor} from './Doktor';

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

    constructor(
        ime: string,
        prezime: string,
        jmbg: string,
        brojKartona: string
    ) {
        super(ime, prezime);
        this._jmbg = jmbg;
        this._brojKartona = brojKartona;
    }

    public izaberiDoktora(doktor: Doktor): void {
        this._doktor = doktor;
        doktor.pacijentArray.push(this);
    }
}