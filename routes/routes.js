const express = require('express');

const router = express.Router();

const {index,login,registerPost,loginPost} = require('../controllers/controllers.js');

router.get('/',login);
router.get('/home',index);

router.post('/registerPost',registerPost);
router.post('/loginPost',loginPost);

module.exports = router; 