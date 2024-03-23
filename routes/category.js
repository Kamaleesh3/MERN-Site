const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/admin/category', categoryController.getAllCategories);
router.post('/admin/category', categoryController.createCategory);
router.post('/:categoryId/subcategories', categoryController.createSubcategory);

module.exports = router;