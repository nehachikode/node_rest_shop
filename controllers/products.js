module.exports = {

    all: (req, res) => {
        res.status(200).json({
            msg: 'Products list!'
        });
    }

};