export abstract class LabPregled {
    constructor(public datumIVreme:Date) {}
    public abstract pregledaj(...args:any[]);
}
