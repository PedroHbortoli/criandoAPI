const connection = require('../config/db')
const dotenv = require('dotenv').config();

async function storeTask(req, res) {

    const params = Array(
        req.body.title,
        req.body.description
    )

    const query = `INSERT INTO tasks (title, description) VALUES (?, ?)`

    connection.query(query, params, (err, res) => {
        if (results) {
            res
                .status(201)
                .json({
                    sucess: true,
                    message: 'sucess',
                    data: res
                })
        } else {
            res
                .status(400)
                .json({
                    sucess: false,
                    message: 'error',
                    data: err
                })

        }
    })

};

module.exports = {
    storeTask
};