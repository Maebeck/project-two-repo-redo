// export all controllers
const router = require('express').Router();

const apiroutes = require('./api');
const viewroutes = require('./home-routes');
router.use('/api', apiroutes);
router.use('/', viewroutes);

module.exports = router;