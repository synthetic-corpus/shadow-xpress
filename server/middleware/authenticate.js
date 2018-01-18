// Will handle Authentcation. Does nothing but call next for now

let {User} = require("./../../models/user");

let authenticate = (req,res,next) => {
    let token = req.header('x-auth');

    User.findByToken(token).then((user)=>{
        if (!user){
            return Promise.reject();
        };

        // Modifies the request before passing it on.
        req.user = user;
        req.token = token;
        next();
    }).catch(() =>{
        res.status(401).send();
    });
};

module.exports = {authenticate};