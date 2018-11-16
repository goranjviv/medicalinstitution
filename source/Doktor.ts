import {Osoba} from './Osoba';
import {Pacijent} from './Pacijent';

export class Doktor extends Osoba {
    private _specijalnost: string;
    public get specijalnost(): string {
        return this._specijalnost;
    }
    private readonly _pacijentArray: Array<Pacijent>;
    public get pacijentArray(): Array<Pacijent> {
        return this._pacijentArray;
    }


    constructor(
        ime: string,
        prezime: string,
        specijalnost: string
    ) {
        super(ime, prezime);
        this._specijalnost = specijalnost;
        this._pacijentArray = new Array<Pacijent>();
    }
}