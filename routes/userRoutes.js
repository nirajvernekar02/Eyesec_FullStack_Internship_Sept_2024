const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup',userController.createUser);
router.get('/get',userController.getuser)
router.put('/update/:id',userController.updateuser)

module.exports = router;