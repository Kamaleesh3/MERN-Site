const express = require('express');
const { getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct, createReview, deleteReview, getReviews ,getAdminProducts} = require('../controllers/productController');
const router = express.Router();
const multer = require('multer')
const path = require('path')

const upload = multer({storage: multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join( __dirname,'..' , 'uploads/product' ) )
    },
    filename: function(req, file, cb ) {
        cb(null, file.originalname)
    }
}) })

router.route('/products').get( getProducts);
router.route('/product/:id')
                           .get(getSingleProduct)
router.route('/review').put( createReview)



//Admin routes
router.route('/admin/product/new').post(upload.array('images'), newProduct);
router.route('/admin/products').get( getAdminProducts);
router.route('/admin/product/:id').delete( deleteProduct);
router.route('/admin/product/:id').put(upload.array('images'), updateProduct);
router.route('/admin/reviews').get(getReviews)
router.route('/admin/review').delete(deleteReview)

module.exports = router