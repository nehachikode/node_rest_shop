module.exports = app => {
    app.use('/products', require('../routes/products'))
}