const Product = require('../models/products');
const Order = require('../models/orders');

module.exports = {

    all: (req, res, next) => {
        Order
            .find()
            .select('_id quantity product')
            .populate('product', 'name')
            .exec()
            .then(result => {
                let resp = {
                    msg: 'Order list!',
                    count: result.length,
                    orders: result.map(res => {
                        return {
                            _id: res._id,
                            quantity: res.quantity,
                            product: res.product,
                            request: {
                                type: 'GET',
                                url: 'http://localhost:3000/orders/' + res._id
                            }
                        }
                    })
                }
                res.status(200).send(resp);
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    error: err
                })
            });
    },

    getOrder: (req, res, next) => {

    },

    add: (req, res, next) => {

        const { quantity, product } = req.body;

        Product.findById(product)
            .then(product => {
                if (product) {
                    const order = new Order({ quantity, product });
                    order
                        .save()
                        .then(resp => {
                            res.status(201).json({
                                msg: 'Product added!',
                                data: resp
                            });
                        })
                        .catch(err => {
                            res.status(500).json({
                                error: err
                            })
                        });
                } else {
                    res.status(500).json({
                        msg: 'No product found',
                        error: err
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            });
    },

    update: (req, res, next) => {

    },

    delete: (req, res, next) => {

    }

};