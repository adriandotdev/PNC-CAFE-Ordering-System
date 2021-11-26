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

const addMenu = (req, res) => {

    const query = `INSERT INTO menu VALUES ('${req.body['id']}', '${req.body['menuName']}', '${req.body['price']}', '${path.basename(req.body['image'])}', ${req.body['isAvailable']})`;

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(error)
        }
        console.log(results)
        res.json(JSON.stringify(results));
    })
    
}

const editMenu = (req, res) => {

    let query = ``;

    console.log(req.body['isAvailable'])
    // check if the admin wants to replace the current image of the menu.
    if (req.body['image'])
        query = `UPDATE menu SET menu = '${req.body['menuName']}', menu_price = '${req.body['price']}', image_path = '${path.basename(req.body['image'])}' , status = '${req.body['isAvailable'] ? 1 : 0}' WHERE menu_id = '${req.body['menuID']}'`
    else 
        query = `UPDATE menu SET menu = '${req.body['menuName']}', menu_price = '${req.body['price']}', status = '${req.body['isAvailable'] ? 1 : 0}' WHERE menu_id = '${req.body['menuID']}'`

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(error)
        }
        console.log(results)
        res.json(JSON.stringify(results));
    })
   
}


const deleteMenu = (req, res) => {

    let query = `DELETE FROM menu WHERE menu_id = '${req.body['menuID']}'`

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(error)
        }
        console.log(results)
        res.json(JSON.stringify(results));
    })
}

const getMenu = (req, res) => {
    
    const query = `SELECT * FROM menu`;

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(error)
        }
        res.json(JSON.stringify(results))
    })
}

const getMenuByID = (req, res) => {

    const query = `SELECT * FROM menu WHERE menu_id = '${req.body['menuID']}'`;

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(error)
        }
        console.log(results)
        res.json(JSON.stringify(results))
    })
}

module.exports = {

    addMenu,
    editMenu,
    deleteMenu,
    getMenu,
    getMenuByID
}