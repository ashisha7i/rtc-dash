const router = require('express').Router();
const Thought = require('../models/Thought');


router.get('/', (req, res, next) =>{
    Thought.find({}, (err, thoughts) => {
        if(err) next(err);
        else res.json(thoughts);
    });
});

router.post('/seed', (req, res, next) => {
    const newThought = new Thought({
        thought: `This is thought ${Math.random().toFixed(5)}`,
        dateCreated: new Date() 
    });

    newThought.save((err) => {
        if(err) console.log(err);
        else console.log('Seeded');
    });
    res.send('Lets check the data!');
});

router.post('/create', (req, res, next) => {
    const { thought } = req.body;
    const newThought = new Thought({
        thought,
        dateCreated: new Date() 
    });

    newThought.save((err) => {
        if(err) console.log(err);
        else res.json({newThought, msg: 'Thought successfully saved!'});
    });
});

/**
 * URL: localhost:5001/api/thoughts/
 * Description: Deletes all Thoughts from DB
 */
 router.delete('/', (req, res, next) => {
    Thought.deleteMany({}, err => {
      if (err) next(err);
      else res.send('Successfully deleted all thoughts');
    });
  });

module.exports = router;