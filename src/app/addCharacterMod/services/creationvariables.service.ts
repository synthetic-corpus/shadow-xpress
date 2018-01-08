// This class will hold various variables
// One will be a skeleton of user object.
// Another will be variables used like
// "Points to spend on attributes" etc

export class CreationVariables {
    // Variables that will change during character creation.
    // Discarded afterwards.
    public creation = {
        specialpoints: 0,
        attributepoints: 0,
        karma: 0,
        magrespoints: 0
    };
    // A Skelton that will match the user Model.
    // Modified during creation, creates user on final submit.
    public character = { };

    // Static character values such as race
    // And maximum Attributes.
    // Added to character array and eventually character model.
    public statics = {
        metaraces: ['human', 'elf', 'orc', 'troll', 'dwarf'],
        maxattributes: {
            human: {bod: 6, agi: 6, rea: 6, str: 6, wil: 6, log: 6, int: 6, cha: 6, edg: 7, ess: 6 },
            elf: {bod: 6, agi: 7, rea: 6, str: 6, wil: 6, log: 6, int: 6, cha: 8, edg: 6, ess: 6},
            orc: {bod: 4, agi: 6, rea: 6, str: 8, wil: 6, log: 5, int: 6, cha: 5, edg: 6, ess: 6},
            troll: {bod: 10, agi: 5, rea: 6, str: 10, wil: 6, log: 5, int: 5, cha: 4, edg: 6, ess: 6},
            dwarf: {bod: 8, agi: 6, rea: 4, str: 8, wil: 7, log: 6, int: 6, cha: 6, edg: 6, ess: 6}
        },
        baseattributes: {
            human: {bod: 1, agi: 1, rea: 1, str: 1, wil: 1, log: 1, int: 1, cha: 1, edg: 2, ess: 6},
            elf: {bod: 1, agi: 2, rea: 1, str: 1, wil: 1, log: 1, int: 1, cha: 3, edg: 1, ess: 6},
            orc: {bod: 4, agi: 1, rea: 1, str: 3, wil: 1, log: 1, int: 1, cha: 1, edg: 1, ess: 6},
            troll: {bod: 5, agi: 1, rea: 1, str: 5, wil: 1, log: 1, int: 1, cha: 1, edg: 1, ess: 6},
            dwarf: {bod: 3, agi: 1, rea: 1, str: 3, wil: 2, log: 1, int: 1, cha: 1, edg: 1, ess: 6}
        }
    };
}
