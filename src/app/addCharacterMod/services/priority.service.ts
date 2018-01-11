export class PriorityTable {
    private table = {
        'a': {
            'meta': {
                'selected': false,
                'payload': {
                    'human': 9,
                    'elf':  8,
                    'dwarf': 7,
                    'ork': 7,
                    'troll': 5
                },
                'html': null
            },
            'attributes': {
                'selected': false,
                'payload': null
            },
            'magres': {
                'selected': false,
                'payload': null,
                'html': null
            },
            'nuyen': {
                'selected': false,
                'payload': null,
                'html': null
            },
            'skills': {
                'selected': false,
                'payload': null,
                'html': null
            },
            'selectable': true
        }, // end of row a
        'b': {
            'meta': {
                'selected': false,
                'payload': {
                    'human': 7,
                    'elf': 6,
                    'dwarf': 4,
                    'ork': 4,
                    'troll': 0
                },
                'html': null
            },
            'attributes': {
                'selected': false,
                'payload': null,
            },
            'magres': {
                'selected': false,
                'payload': null,
                'html': null
            },
            'nuyen': {
                'selected': false,
                'payload': null,
                'html': null
            },
            'skills': {
                'selected': false,
                'payload': null,
                'html': null
            },
            'selectable': true
        }, // end of row b
        'c': {
            'meta': {
                'selected': false,
                'payload': {
                    'human': 4,
                    'elf': 2,
                    'dwarf': 1,
                    'ork': 0,
                    'troll': null
                },
                'html': null
            },
            'attributes': {
                'selected': false,
                'payload': null
            },
            'magres': {
                'selected': false,
                'payload': null,
                'html': null
            },
            'nuyen': {
                'selected': false,
                'payload': null,
                'html': null
            },
            'skills': {
                'selected': false,
                'payload': null,
                'html': null
            },
            'selectable': true
        }, // end of row c
        'd': {
            'meta': {
                'selected': false,
                'payload': {
                    'human': 3,
                    'elf': 0,
                    'dwarf': null,
                    'ork': null,
                    'troll': null
                },
                'html': null
            },
            'attributes': {
                'selected': false,
                'payload': null
            },
            'magres': {
                'selected': false,
                'payload': null,
                'html': null
            },
            'nuyen': {
                'selected': false,
                'payload': null,
                'html': null
            },
            'skills': {
                'selected': false,
                'payload': null,
                'html': null
            },
            'selectable': true
        }, // end of row d
        'e': {
            'meta': {
                'selected': false,
                'payload': {
                    'human': 1,
                    'elf': null,
                    'dwarf': null,
                    'ork': null,
                    'troll': null
                },
                'html': null
            },
            'attributes': {
                'selected': false,
                'payload': null
            },
            'magres': {
                'selected': false,
                'payload': null,
                'html': null
            },
            'nuyen': {
                'selected': false,
                'payload': null,
                'html': null
            },
            'skills': {
                'selected': false,
                'payload': null,
                'html': null
            },
            'selectable': true
        }, // end of row e
        'columns': {
            'meta': false,
            'attributes': false,
            'magres': false,
            'nuyen': false,
            'skills': false
        } // end columns attribute
    }; // end of table

    constructor(
    ) {
    }

    getTable() {
        return this.table;
    }
}
