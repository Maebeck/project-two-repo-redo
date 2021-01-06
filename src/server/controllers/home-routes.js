const router = require('express').Router();
// const {Jets} = require('./models');



router.get('/', async (req, res) => {
  try {
    res.render('home');
  } catch (err){
    res.status(500).json(err);
}});

router.get('/private', async (req, res) => {
    try {
      // const allJets = await Jets.findAll({
        
      // });
      // const jets = allJets.map(jet => jet.get({plane: true}));
  
      res.render('private-home');

    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });
  router.get('/home', async (req, res) => {
    try {
      res.render('home');
    } catch (err){
      res.status(500).json(err);
    }
  });
  router.get('/login', async (req, res) => {
    try {
      res.render('login');
    } catch (err){
      res.status(500).json(err);
    }
  });
  router.get('/contact', async (req, res) => {
    try {
      res.render('contact');
    } catch (err){
      res.status(500).json(err);
    }
  });

module.exports = router;