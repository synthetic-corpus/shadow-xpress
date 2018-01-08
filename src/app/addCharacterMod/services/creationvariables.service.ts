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
            human: { },
            elf: { },
            orc: { },
            troll: { },
            dwarf: { }
        }
    };
}
