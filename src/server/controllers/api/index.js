// export all controllers
const router = require('express').Router();
const exphbs = require('express-handlebars');
const jetRoutes = require('./jetRoutes');


router.use('/jets', jetRoutes);

module.exports = router;