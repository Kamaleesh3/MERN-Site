const express = require('express');
const multer = require('multer')
const path = require('path')

const upload = multer({storage: multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join( __dirname,'..' , 'uploads/user' ) )
    },
    filename: function(req, file, cb ) {
        cb(null, file.originalname)
    }
}) })

const { 
    registerUser,
    logoutUser,
    forgotPassword, 
    resetPassword, 
    getUserProfile, 
    changePassword,
    updateProfile,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
    } = require('../controllers/authController');
const { loginUser } = require('../controllers/authController');
const router = express.Router();

router.route('/register').post(upload.single('avatar'), registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser)
router.route('/password/forgot').post(forgotPassword)
router.route('/password/reset/:token').post(resetPassword)
router.route('/password/change').put( changePassword)
router.route('/myprofile').get(getUserProfile)
router.route('/update').put( upload.single('avatar'),  updateProfile)

//Admin routes
router.route('/admin/users').get( getAllUsers)
router.route('/admin/user/:id').get( getUser)
                                .put( updateUser)
                                .delete( deleteUser)




module.exports = router;
