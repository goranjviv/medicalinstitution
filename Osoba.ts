export class Osoba {
    private _ime: string;
    public get ime(): string {
        return this._ime;
    }
    private _prezime: string;
    public get prezime(): string {
        return this._prezime;
    }

    constructor(
        ime: string,
        prezime: string,
    ) {
        this._ime = ime;
        this._prezime = prezime;
    }
}