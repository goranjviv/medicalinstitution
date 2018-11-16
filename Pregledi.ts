import {LabPregled} from './LabPregled';

export namespace Pregledi {
    export class MerenjeSecera extends LabPregled
    {
        private _vrednost:number;
        public get vrednost(): number {
            return this._vrednost;
        }
        private _vremeObroka: Date;
        public get vremeObroka(): Date {
            return this._vremeObroka;
        }

        public podesiVrednosti(
            vrednost: number,
            vremeObroka: Date
        ): void {
            this._vrednost = vrednost;
            this._vremeObroka = vremeObroka;
        }

        public pregledaj() {};
    }

    export class MerenjePritiska extends LabPregled
    {
        private _gornjaVrednostMmHg:number;
        public get gornjaVrednostMmHg():number {
            return this._gornjaVrednostMmHg;
        }
        private _donjaVrednostMmHg: number;
        public get donjaVrednostMmHg(): number {
            return this._donjaVrednostMmHg;
        }
        private _pulsBpm: number;
        public get pulsBpm(): number {
            return this._pulsBpm;
        }

        public podesiVrednosti(
            gornjaVrednostMmHg:number,
            donjaVrednostMmHg:number,
            pulsBpm:number
        ) {
            this._gornjaVrednostMmHg = gornjaVrednostMmHg;
            this._donjaVrednostMmHg = donjaVrednostMmHg;
            this._pulsBpm = pulsBpm;
        }

        public pregledaj() {}
    }

    export class MerenjeHolesterola extends LabPregled
    {
        private _vrednost:number;
        public get vrednost(): number {
            return this._vrednost;
        }
        private _vremeObroka: Date;
        public get vremeObroka(): Date {
            return this._vremeObroka;
        }
    
        public podesiVrednosti(
            vrednost: number,
            vremeObroka: Date
        ): void {
            this._vrednost = vrednost;
            this._vremeObroka = vremeObroka;
        }

        public pregledaj() {

        }
    }
}