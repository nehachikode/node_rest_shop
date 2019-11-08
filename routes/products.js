const express = require('express');
const router = express.Router();
const controller = require('../controllers/products');

router
    .get('/', controller.all)
    .get('/:id', controller.getProduct)
    .patch('/update/:id', controller.update)
    .delete('/delete/:id', controller.delete)
    .post('/add', controller.add)

module.exports = router;