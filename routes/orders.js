const express = require('express');
const router = express.Router();
const controller = require('../controllers/orders');

router
    .get('/', controller.all)
    .get('/:id', controller.getOrder)
    .get('/:id', controller.update)
    .get('/:id', controller.delete)

router
    .post('/add', controller.add)

module.exports = router;