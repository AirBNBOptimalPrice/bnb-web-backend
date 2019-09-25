const router = require('express').Router();

const authenticate = require('../auth/authenticate-middleware.js')
const Features = require('./feature-model.js');

router.get('/', (req, res) => {
  Features.find()
    .then(feature => {
      res.json({ feature });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({message: `server 500 error`})
    });
  });
router.post('/add-features', (req, res) => {
  let features = req.body
  Features.addFeatures( features )
    .then(saved => {
      res.json({ saved })
      console.log('this is what will be saved', saved)
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({ message: 'error adding features', err: err})
    })
})

module.exports = router;