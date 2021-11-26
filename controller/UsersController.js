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

const getUsers = (req, res) => {
  
    let query = `select users.id_number, users.email, existing_users.sex, existing_users.given_name, existing_users.middle_name, existing_users.last_name, existing_users.age,existing_users.mobile_number from users inner join existing_users on users.id_number = existing_users.id_number;`

    connection.query(query, function (error, results, fields) {

        if (error)
            console.log(error)

        console.log(results)
        res.json(JSON.stringify(results))
    })
}

const getUserByID = (req, res) => {

    let query = `select users.id_number, users.email, users.password, users.mobile_number, users.profile_image_path, existing_users.given_name, existing_users.middle_name, existing_users.last_name, existing_users.age from users  inner join existing_users on users.id_number = existing_users.id_number where users.id_number = '${req.body['userIDNumber']}';`

    connection.query(query, function (error, results, fields) {

        if (error)
            console.log(error)
        
        console.log(results)
        res.json(JSON.stringify(results))
    })
}

const updateUserWithID = (req, res) => {

    console.log(req.body)
    let query = ''
    if (req.body['image'])
        query = `update users set email = '${req.body['email']}', mobile_number = '${req.body['contactNumber']}', password = '${req.body['newPassword']}', profile_image_path = '${path.basename(req.body['image'])}' where id_number = '${req.body['userIDNumber']}'`
    else
        query = `update users set email = '${req.body['email']}', mobile_number = '${req.body['contactNumber']}', password = '${req.body['newPassword']}' where id_number = '${req.body['userIDNumber']}'`

    connection.query(query, function (error, results, fields) {

        if (error)
            console.log(error)

        console.log(results, req.body)
        res.json(JSON.stringify(results))
    })
}

const deleteUserAccount = (req, res) => {

    let query = `DELETE FROM users WHERE id_number = '${req.body['userIDNumber']}'`

    console.log('delete', req.body)
    connection.query(query, function (error, results, fields) {

        if (error)
            console.log(error)

        console.log(results, req.body)
        res.json(JSON.stringify(results))
    })
}
module.exports = {
    getUsers,
    getUserByID,
    updateUserWithID,
    deleteUserAccount
}