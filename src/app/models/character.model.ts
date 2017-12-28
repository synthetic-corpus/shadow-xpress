export class Character {
    public basic: Basic;
    public resources: number;
    public karma: number;
    public attributes: Attributes;
    /* Further testing ...
    public conditions: conditions;
    public qualities: qualities;
    */
    constructor(basic, attributes, resources, karma) {
        this.basic = new Basic(
            basic.name,
            basic.metatype,
            basic.age,
            basic.gender,
            basic.height,
            basic.weight,
            basic.alias);
        this.resources = resources;
        this.karma = karma;
        this.attributes = new Attributes(
            attributes.bod,
            attributes.agi,
            attributes.rea,
            attributes.str,
            attributes.wil,
            attributes.log,
            attributes.int,
            attributes.cha,
            attributes.edg,
            attributes.ess,
            attributes.ini,
            attributes.mag,
            attributes.res
        );
    }
}

export class Basic {
    public name: string;
    public metatype: string;
    public age: number;
    public gender: string;
    public height: number;
    public weight: number;
    public alias: string[];
    constructor(name, metatype, age, gender, height, weight, alias) {
        this.name = name || null;
        this.metatype = metatype || null;
        this.age = age || null;
        this.gender = gender || null;
        this.height = height || null;
        this.weight = weight || null;
    }
}

export class Attributes {
    /*
        There is an obvsious reason to use a loop here.
        Pending stack Overflow to figure that part out.
    */
    public bod: number;
    public agi: number;
    public rea: number;
    public str: number;
    public wil: number;
    public log: number;
    public int: number;
    public cha: number;
    public edg: number;
    public ess: number;
    public ini: number;
    public mag: number;
    public res: number;
    constructor(bod, agi, rea, str, wil, log, int, cha, edg, ess, ini, mag, res){
        this.bod = bod || 0;
        this.agi = agi || 0;
        this.rea = rea || 0;
        this.wil = wil || 0;
        this.log = log || 0;
        this.int = int || 0;
        this.cha = cha || 0;
        this.edg = edg || 0;
        this.ess = ess || 0;
        this.ini = ini || 0;
        this.mag = mag || 0;
        this.res = res || 0;
    }
}
