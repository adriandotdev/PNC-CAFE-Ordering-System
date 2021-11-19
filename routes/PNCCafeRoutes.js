const express = require('express');
const path = require('path')
var mysql  = require('mysql');

const route = express.Router();

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


route.post('/verify-user', (req, res) => {

    const query = `SELECT * FROM existing_users WHERE id_number = '${req.body['IDNumber']}'`

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(error);
            return;
        }
        console.log(results)
        res.json(JSON.stringify(results))
    })
})

route.post('/get-user', (req, res) => {

    const query = `SELECT * FROM users WHERE id_number = '${req.body['IDNumber']}'`

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(error);
            return;
        }
        console.log(results)
        res.json(JSON.stringify(results))
    })
})

route.post('/add-user', (req, res) => {

    const query = `INSERT INTO users VALUES ('${req.body['IDNumber']}', '${req.body['password']}', '${req.body['email']}')`;

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(error);
            return;
        }
        console.log(results)
        res.json(JSON.stringify({status: 200}))
    })
});



// ROUTES FOR MENU
route.get('/get-menu', (req, res) => {
    
    const query = `SELECT * FROM menu`;

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(err)
        }
        res.json(JSON.stringify(results))
    })
})

route.post('/get-menu-id', (req, res) => {

    const query = `SELECT * FROM menu WHERE menu_id = '${req.body['menuID']}'`;

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(err)
        }
        console.log(results)
        res.json(JSON.stringify(results))
    })
})

route.post('/add-menu', (req, res) => {

    const query = `INSERT INTO menu VALUES ('${req.body['id']}', '${req.body['menuName']}', '${req.body['menuDesc']}' , '${req.body['price']}', '${path.basename(req.body['image'])}')`;

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(err)
        }
        console.log(results)
        res.json(JSON.stringify(results));
    })
    
})

route.post('/edit-menu', (req, res) => {

    let query = ``;

    // check if the admin wants to replace the current image of the menu.
    if (req.body['image'])
        query = `UPDATE menu SET menu = '${req.body['menuName']}', menu_desc = '${req.body['menuDesc']}', menu_price = '${req.body['price']}', image_path = '${path.basename(req.body['image'])}' WHERE menu_id = '${req.body['menuID']}'`
    else 
        query = `UPDATE menu SET menu = '${req.body['menuName']}', menu_desc = '${req.body['menuDesc']}', menu_price = '${req.body['price']}' WHERE menu_id = '${req.body['menuID']}'`

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(err)
        }
        console.log(results)
        res.json(JSON.stringify(results));
    })
   
})

route.delete('/delete-menu', (req, res) => {

    let query = `DELETE FROM menu WHERE menu_id = '${req.body['menuID']}'`

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(err)
        }
        console.log(results)
        res.json(JSON.stringify(results));
    })
})
module.exports = route;