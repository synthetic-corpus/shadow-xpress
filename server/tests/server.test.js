const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

// Custom imports
const {app} = require('./../server');
const {authenticate} = require('../middleware/authenticate');
const {Character} = require('../../models/character');
const {User} = require('../../models/user');
const {mongoose} = require('../../db/mongoose');

// Other test imports
const {populateUsers,users,characters,populateCharacters} = require('./seed/seed');

beforeEach(populateUsers);
beforeEach(populateCharacters);

// Unfinished
describe('Post new user', () => {
    it('should create a new user', (done) =>{
        request(app)
        .post('/user')
        .send({'email':'thisisgood@yahoo.com','password':'this890NN!'})
        .expect((res)=>{
            expect(res.body).toContainKeys(['email','_id']);
            expect(res.body).toNotContainKey("errmsg");
        })
        .end(done);
    });
    
    it('should not create a new user b/c bad e-mail', (done)=>{
        request(app)
        .post('/user')
        .send({'email':'thisisgoodyahoo.com','password':'this890NN!'})
        .expect((res)=>{
            expect(res.body).toExist()
        })
        .end(done);

    });

    it('should not create a new user b/c bad password', (done)=>{
        request(app)
        .post('/user')
        .send({'email':'thisisgood@yahoo.com','password':'thiePasswert'})
        .expect((res)=>{
            expect(res.body).toBe({})
        })
        .end(done);

    });

    it('should not create a new user b/c duplicate e-mail', (done)=>{
        request(app)
        .post('/user')
        .send({'email':'haxxor@gmail.com','password':'this890NN!'})
        .expect((res)=>{
            expect(res.body).toContain("errmsg")
        })
        .end(done);
    })
});
/* Probably Written All wrong
describe('Authentication', ()=>{
    it('should login', (done)=>{
        request(app)
        .post('/users/login')
        .send({'email':'haxxor@gmail.com','password':'eee#@133JMXXswww'})
        .expect(res.body).toIncludeKeys(['_id','email'])
        .expect(res.status).toBe(200)
        .expect(res.header).toIncludeKey('x-auth')
        .end(done)

    });
    it('should logout', (done)=>{
        request(app)
        .delete('/users/me/token')
        .send(users[0])
        .expect(res.status).toBe(200)
        .expect(res.body.tokens).toBe([])
        .end(done)

    });
    it('should not login b/c bad password', (done)=>{
        request(app)
        .post('/users/login')
        .send({'email':'haxxor@gmail.com','password':'Bullshit Password'})
        .expect(res.status).toBe(401)
        .expect(res.header).toExcludeKey('x-auth')
        .end(done)
    });
    it('should not login b/c bad password', (done)=>{
        request(app)
        .post('/users/login')
        .send({'email':'haxxor-theAWESOME@gmail.com','password':'eee#@133JMXXswww'})
        .expect(res.status).toBe(401)
        .expect(res.header).toExcludeKey('x-auth')
        .end(done)
    });
});

describe('SCUD Characters with correct authentations', ()=>{
    it('should add a character', (done)=>{
        request(app)
        .post('/character')
        .set('x-auth', users[0].token[0].token)
        .send(newCharacter)
        .expect(res.body).toInclude({"_creator": userOneId})
        .end(done)
    });
    it('should delete a character', (done)=>{
        var hexId = users[0]._id.toHexString()
        request(app)
        .delete(`character/delete/${hexId}`)
        .expect(res.body).toIncludeKeys(["_id","basic"])
        .end((err,res)=>{
            if (err){
                return done(err)
            };
            Character.findById(hexId).then((runner)=>{
                expect(runner).toNotExist();
                done();
            }).catch((e)=>{
                done(e);
            })
        })

    });
    it('should update a character it owns', (done)=>{
        let charID = character[0]._id.toHexString();

        request(app)
        .patch(`/character/update/${charID}`)
        .set('x-auth', users[0].token[0].token)
        .send({$set:{
            "basic.name":"Susan",
            "karma": 14,
            "attributes.body": 99,
            "conditions.physical.boxes": 3
            }
        })
        .expect((res)=>{
            expect(res.body).toExclueKey("_id");
            expect(res.status).toBe(200);
            expect(res.body.basic.name).toBe("Susan");
            expect(res.body.karma).toBe(14);
            expect(res.body.attributes.bod).toBe(99);
            expect(res.body.conditions.physical.boxes).toBe(3);
        })
        .end(done)

    });
    it('should get all chracters it owns', (done)=>{
        let charID = character[0]._id.toHexString();
        
        request(app)
        .set('x-auth', users[0].token[0].token)
        .get("/characters")
        .expect((res)=>{
            expect(res.body).toBeA(array);
            expect(res.body.length).toBe(2);
            expect(res.body).toExclude({"_creator":userTwoId});
        })
        .end(done);
    });
    it('should get character Blitz', (done)=>{
        let charID = character[1]._id.toHexString();

        request(app)
        .get(`/characters/${charID}`)
        .set('x-auth', users[0].token[0].token)
        .expect((res)=>{
            expect(res.body.basic.name).toBe("Blitz")
        })
    })
});
*/
/*
describe('SCUD Characters with incorrect authentication', ()=>{
    it('should not add a character',(done)=>{
        // Attempt to add character sans JWT.
    });
    it('should not delete a character', (done)=>{

    });
    it('should not update a character it does not own', (done)=>{

    });
    it('should not get any characters without a valid token', (done)=>{

    });
    it('should not get a character Blitz', (done)=>{

    });
})*/
