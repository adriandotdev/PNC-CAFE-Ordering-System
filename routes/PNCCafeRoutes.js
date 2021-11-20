const express = require('express');
const {verifyUser, getUser, addUser} = require('../controller/AuthenticationController')
const {addMenu, editMenu, deleteMenu, getMenu, getMenuByID} = require('../controller/MenuController')
const {getCartItem, addQuantity, addToBag, getCartItems} = require('../controller/CartController')
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


/** ROUTES FOR AUTHENTICATING A USER */
route.post('/verify-user', verifyUser)

route.post('/get-user', getUser)

route.post('/add-user', addUser);


// ROUTES FOR MENU
route.post('/add-menu', addMenu)

route.get('/get-menu', getMenu)

route.post('/get-menu-id', getMenuByID)

route.post('/edit-menu', editMenu)

route.delete('/delete-menu', deleteMenu)


// ROUTES FOR CART
route.post('/get-cart-item', getCartItem)

route.post('/add-quantity', addQuantity)

route.post('/add-to-bag', addToBag)

route.post('/get-cart-items', getCartItems)

module.exports = route;