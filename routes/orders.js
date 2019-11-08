const express = require('express');
const router = express.Router();
const controller = require('../controllers/orders');

router
    .get('/', controller.all)
    .get('/get:id', controller.getOrder)
    .patch('/update:id', controller.update)
    .delete('/delete:id', controller.delete)
    .post('/add', controller.add)

module.exports = router;