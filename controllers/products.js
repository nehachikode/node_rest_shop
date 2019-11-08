const mongoose = require('mongoose');
const Product = require('../models/products');

module.exports = {

    all: (req, res, next) => {
        Product
            .find()
            .select('_id name price')
            .exec()
            .then(result => {
                let resp = {
                    msg: 'Product list!',
                    count: result.length,
                    products: result.map(res => {
                        return {
                            _id: res._id,
                            name: res.name,
                            price: res.price,
                            request: {
                                type: 'GET',
                                url: 'http://localhost:3000/products/' + res._id
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

    getProduct: (req, res, next) => {
        const id = req.params.id;

        Product
            .findById(id)
            .exec()
            .then(result => {
                if (result) {
                    res.status(200).json({
                        msg: 'Product info!',
                        data: result
                    });
                } else {
                    res.status(200).json({
                        msg: 'No products found!',
                        data: {}
                    });
                }
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            });
    },

    add: (req, res, next) => {

        const product = new Product({
            _id: new mongoose.Types.ObjectId,
            name: req.body.name,
            price: req.body.price
        });

        product
            .save()
            .then(result => {
                res.status(201).json({
                    msg: 'Product added!',
                    data: product
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            });
    },

    update: (req, res, next) => {
        const id = req.params.id;
        const updateOps = {};
        for (const ops of req.body) {
            updateOps[ops.propName] = ops.value
        }

        Product
            .update(
                { _id: id },
                { $set: updateOps }
            )
            .exec()
            .then(result => {
                res.status(200).json({
                    msg: 'Product updated!',
                    data: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            });
    },

    delete: (req, res, next) => {
        const id = req.params.id;

        Product
            .deleteOne({
                _id: id
            })
            .exec()
            .then(result => {
                res.status(200).json({
                    msg: 'Product deleted!',
                    data: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            });
    }
};