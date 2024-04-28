
const express = require('express');
const router = express.Router();
const { getAllCategories, createCategory, getCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');

router.route('/cates').get(getAllCategories)
router.route('/cates').post(createCategory)
router.route('/cates:id').get(getCategory)
router.route('/cates:id').put(updateCategory)
router.route('/cates:id').delete(deleteCategory)

module.exports = router;
