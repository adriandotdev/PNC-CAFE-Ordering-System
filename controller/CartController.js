var mysql  = require('mysql');

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

const getCartItem = (req, res) => {

    const query = `SELECT * FROM cart WHERE menu_id = '${req.body['menuID']}' AND id_number = '${req.body['userIDNumber']}'`;
    
    connection.query(query, function (error, results, fields) {

        if (error)
            console.log(error)

        res.json(JSON.stringify(results))
    })
}

const addQuantity = (req, res) => {
    
    const query = `UPDATE cart SET quantity = '${req.body['newQty']}' WHERE menu_id = '${req.body['menuID']}' AND id_number = '${req.body['userIDNumber']}'`;
    
    connection.query(query, function (error, results, fields) {

        if (error)
            console.log(error)

        res.json(JSON.stringify(results))
    })
}

const addToBag = (req, res) => {

    const query = `INSERT INTO cart VALUES ('${req.body['userIDNumber']}', '${req.body['menuID']}', '${req.body['quantity']}')`

    connection.query(query, function (error, results, fields) {

        if (error)
            console.log(error)

        res.json(JSON.stringify(results))
    })
}

const getCartItems = (req, res) => {

    const query = `SELECT * FROM cart inner join menu on menu.menu_id = cart.menu_id WHERE id_number = '${req.body['userIDNumber']}'`

    connection.query(query, function (error, results, fields) {

        if (error)
            console.log(error)

        res.json(JSON.stringify(results))
    })
}

module.exports = {
    getCartItem,
    addQuantity,
    addToBag,
    getCartItems
}