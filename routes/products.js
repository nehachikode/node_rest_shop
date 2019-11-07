const express = require('express');
const router = express.Router();
const controller = require('../controllers/products');

router
    .get('/', controller.all)
    .get('/:id', controller.getProduct)
    .get('/:id', controller.update)
    .get('/:id', controller.delete)

router
    .post('/add', controller.add)

module.exports = router;