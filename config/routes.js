module.exports = app => {
    app.use('/products', require('../routes/products'))
    app.use('/orders', require('../routes/orders'))
}