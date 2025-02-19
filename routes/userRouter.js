//external module
const express = require('express');
//core module
const http = require('http');
const router = express.Router();

//local module
const homeController = require('../controllers/homeController');

router.get('/', homeController.getHomeFromDb);
router.get('/about', homeController.getAbout);
router.get('/contact', homeController.getContact);
router.post('/contact', homeController.postContact);
router.get('/service', homeController.getService);

module.exports = router;