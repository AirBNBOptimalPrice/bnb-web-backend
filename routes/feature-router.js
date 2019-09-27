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
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({ message: 'error adding features', err: err})
    })
})
router.delete('/:id', (req, res) => {
  Features.removeFeature(req.params.id)
    .then(removed => {
      if (removed > 0){
        res.status(200).end()
      }else{
        res.status(404).json('feature not found')
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})
router.put('/:id', (req, res) => {
  const changes = req.body;
  const id = req.params.id;

  Features.updateFeature(id, changes)
    .then( update => {
      if (update > 0) {
        Features.findById(id)
          .then(feature => {
            res.status(200).json(feature)
          })
      }else{
        res.status(404).json('feature not found')
      }
    })
    .catch(err => {
      console.log('something went horrible wrong', err)
      res.status(500).json(err)
    })
})

module.exports = router;