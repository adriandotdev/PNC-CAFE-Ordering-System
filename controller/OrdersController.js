var mysql  = require('mysql');
const path = require('path')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'pnc_cafe'
});

connection.connect((err) => {
    if (err)
        console.log(err)

    console.log('connected to pnc-cafe')
});

const addOrder = (req, res) => {

    const query = `INSERT INTO Orders VALUES ('${req.body['userIDNumber']}', '${req.body['orderID']}', '${req.body['orderDate']}',
    '${req.body['items']}', '${req.body['orderDetails']}', '${req.body['status']}')`;

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(error)
        }
        console.log(results)
        res.json(JSON.stringify(results))
    })
}

const pendingOrders = (req, res) => {

    const query = `SELECT * FROM Orders WHERE id_number = '${req.body['userIDNumber']}' AND status = 'pending'`;

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(error)
        }
        console.log(results)
        res.json(JSON.stringify(results))
    })
}
module.exports = {
    addOrder,
    pendingOrders
}