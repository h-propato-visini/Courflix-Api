const express = require('express');
const router = express.Router();
const carouselController = require ('../controllers/carouselController')
const carouselInstance = new carouselController()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/carouseles', (req, res)=> carouselInstance.getItem(req, res))

module.exports = router;
