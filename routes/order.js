const express = require('express');
const { newOrder, getSingleOrder, myOrders, orders, updateOrder, deleteOrder } = require('../controllers/orderController');
const router = express.Router();

router.route('/order/new').post(newOrder);
router.route('/order/:id').get(getSingleOrder);
router.route('/myorders').get(myOrders);

//Admin Routes
router.route('/admin/orders').get( orders)
router.route('/admin/order/:id').put( updateOrder)
                        .delete( deleteOrder)

module.exports = router;