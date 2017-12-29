import { ObjectID } from 'mongodb';

export class User {
    constructor(
        public name: string = null,
        public email: string = null,
        public gender: string = null,
        public bio: string = null,
        public location: string = null,
        public characters: ObjectID[] = [],
        public token: String = null
    ) {}
}
