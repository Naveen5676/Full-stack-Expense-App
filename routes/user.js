const express = require( 'express' );
const userController = require('../controllers/user');

const router = express.Router();

router.post( '/userdata', userController.postAddData);
router.get('/getuserdata', userController.getData);
router.delete('/deleteuserdata/:prodid' , userController.getDataDelete);

module.exports  = router