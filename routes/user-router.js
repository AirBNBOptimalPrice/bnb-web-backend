const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./user-model.js');

router.get('/',authenticate, (req, res) => {
    Users.find()
      .then(users => {
        res.json({ users, loggedInUser: req.user.username });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({message: `server 500 error`})
      });
    });  

router.post('/register', (req, res) => {
    //implement registration
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })

})
router.post('/login', (req, res) => {
    // implement login
    let { username, password }= req.body;

    Users.findBy({ username })
    .first()
    .then( user => {
        if( user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ token });

        }else{
        res.status(401).json({ message: 'invalid credentials'});
        }
    })
    .catch(err => {
        res.status(500).json({ message: `server 500 error ${err}`})
    })
});

function generateToken(user) {
    const payload = {
        username: user.username,
    };
    const options = {
        expiresIn: '1d',
    };
        return jwt.sign(payload, secrets.jwtSecret, options);
    }

module.exports = router;