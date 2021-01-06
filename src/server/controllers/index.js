// export all controllers
const router = require('express').Router();

const apiroutes = require('./api');
const viewroutes = require('./home-routes');
router.use('/', viewroutes);
router.use('/api', apiroutes);

module.exports = router;