export class PriorityTable {
    private magres = {
        'a': {
            'none': null,
            'mystic': {'mag': 6, 'res': 0, 'text': 'Gain 6 Magic'},
            'technomancer': {'mag': 0, 'res': 6, 'text': 'Gain 6 Resonance'},
            'adept': null,
            'aspected': null
        },
        'b': {
            'none': null,
            'mystic': {'mag': 4, 'res': 0, 'text': 'Gain 4 Magic'},
            'technomancer': {'mag': 0, 'res': 4, 'text': 'Gain 4 Resonance'},
            'adept': {'mag': 6, 'res': 0, 'text': 'Gain 6 Magic'},
            'aspected': {'mag': 5, 'res': 0, 'text': 'Gain 5 Magic'}
        },
        'c': {
            'none': null,
            'mystic': {'mag': 3, 'res': 0, 'text': 'Gain 3 Magic'},
            'technomancer': {'mag': 0, 'res': 3, 'text': 'Gain 3 Resonance'},
            'adept': {'mag': 4, 'res': 0, 'text': 'Gain 4 Magic'},
            'aspected': {'mag': 3, 'res': 0, 'text': 'Gain 3 Magic'}
        },
        'd': {
            'none': null,
            'mystic': null,
            'technomancer': null,
            'adept': {'mag': 2, 'res': 0 , 'text': 'Gain 2 Magic'},
            'aspected': {'mag': 2, 'res': 0, 'text': 'Gain 2 Magic'}
        },
        'e': {
            'none': {'mag': 0, 'res': 0, 'text': 'If not a magic user, click here'},
            'mystic': null,
            'technomancer': null,
            'adept': null,
            'aspected': null
        },
    };

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
                'payload': {'single': 46, 'group': 10}
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
                'payload': {'single': 36, 'group': 5}
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
                'payload': {'single': 28, 'group': 2}
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
                'payload': {'single': 22, 'group': 0}
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
                'payload': {'single': 18, 'group': 0}
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

    getMagres(){
        return this.magres;
    }

    getTable() {
        return this.table;
    }
}
