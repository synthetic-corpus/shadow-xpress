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
                }
            },
            'attributes': {
                'selected': false,
                'payload': 24
            },
            'magres': {
                'selected': false,
                'payload': {
                    'none': null,
                    'mystic': null,
                    'technomancer': null,
                    'adept': null,
                    'aspected': null
                }
            },
            'nuyen': {
                'selected': false,
                'payload': 450000
            },
            'skills': {
                'selected': false,
                'payload': null
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
                }
            },
            'attributes': {
                'selected': false,
                'payload': 20
            },
            'magres': {
                'selected': false,
                'payload': {
                    'none': null,
                    'mystic': null,
                    'technomancer': null,
                    'adept': null,
                    'aspected': null
                }
            },
            'nuyen': {
                'selected': false,
                'payload': 275000
            },
            'skills': {
                'selected': false,
                'payload': null
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
                }
            },
            'attributes': {
                'selected': false,
                'payload': 16
            },
            'magres': {
                'selected': false,
                'payload': {
                    'none': null,
                    'mystic': null,
                    'technomancer': null,
                    'adept': null,
                    'aspected': null
                }
            },
            'nuyen': {
                'selected': false,
                'payload': 140000
            },
            'skills': {
                'selected': false,
                'payload': null
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
                }
            },
            'attributes': {
                'selected': false,
                'payload': 14
            },
            'magres': {
                'selected': false,
                'payload': {
                    'none': null,
                    'mystic': null,
                    'technomancer': null,
                    'adept': null,
                    'aspected': null
                }
            },
            'nuyen': {
                'selected': false,
                'payload': 50000
            },
            'skills': {
                'selected': false,
                'payload': null
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
                }
            },
            'attributes': {
                'selected': false,
                'payload': 12
            },
            'magres': {
                'selected': false,
                'payload': {
                    'none': {'mag': 0, 'res': 0},
                    'mystic': null,
                    'technomancer': null,
                    'adept': null,
                    'aspected': null
                }
            },
            'nuyen': {
                'selected': false,
                'payload': 6000
            },
            'skills': {
                'selected': false,
                'payload': null
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
