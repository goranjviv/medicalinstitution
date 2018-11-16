import { Doktor } from "./Doktor";
import { Pacijent } from "./Pacijent";

export abstract class LabPregled {
    public pregledan: boolean;
    constructor(
        public datumIVreme: Date, 
        public doktor: Doktor,
        public pacijent: Pacijent
        ) {}
    public abstract podesiVrednosti(...args:any[]);
    public pregledaj() {this.pregledan = true};
}
