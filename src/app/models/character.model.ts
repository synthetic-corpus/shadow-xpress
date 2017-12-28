export class Character {
    public basic: Basic;
    public resources: number;
    public karma: number;
    public attributes: Attributes;
    public conditions: Conditions;
    /* "qualities" is not yet ready on the back end.
       Will keep here an will probably do it for real soon
    public qualities: qualities;
    */
    constructor(basic, attributes, resources, karma, mental, physical) {
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
        this.conditions = new Conditions(mental, physical );
    }
}

export class Conditions {
    public physical = {
        boxes: 0,
        modifiers: 0
    };
    public mental = {
        boxes: 0,
        modifiers: 0
    };
    getmod(x) {
        return Math.floor(x / 3) * -1;
    }
    constructor(mental, physical) {
        this.physical.boxes = physical;
        this.mental.boxes = mental;
        this.physical.modifiers = this.getmod(physical);
        this.mental.modifiers = this.getmod(mental);
    }
}

export class Basic {
    constructor(
        public name: string = null,
        public metatype: string = null,
        public age: number = 0,
        public gender: string = null,
        public height: number = 0,
        public weight: number = 0,
        public alias: string[] = []) {
    }
}

export class Attributes {
    constructor(
        public bod: number = 0,
        public agi: number = 0,
        public rea: number = 0,
        public str: number = 0,
        public wil: number = 0,
        public log: number = 0,
        public int: number = 0,
        public cha: number = 0,
        public edg: number = 0,
        public ess: number = 0,
        public ini: number = 0,
        public mag: number = 0,
        public res: number = 0
    ) {
    }
}