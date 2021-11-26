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

const verifyUser = (req, res) => {

    const query = `SELECT * FROM existing_users WHERE id_number = '${req.body['IDNumber']}'`

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(error);
            return;
        }
        console.log(results)
        res.json(JSON.stringify(results))
    })
}

const getUser = (req, res) => {

    const query = `SELECT * FROM users WHERE id_number = '${req.body['IDNumber']}'`

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(error);
            return;
        }
        console.log(results)
        res.json(JSON.stringify(results))
    })
}

const addUser = (req, res) => {

    const query = `INSERT INTO users VALUES ('${req.body['IDNumber']}', '${req.body['password']}', '${req.body['email']}', '${req.body['mobileNumber']}', 'none')`;

    connection.query(query, function (error, results, fields) {

        if (error) {
            console.log(error);
            return;
        }
        console.log(results)
        res.json(JSON.stringify({status: 200}))
    })
}

module.exports ={

    verifyUser,
    getUser,
    addUser
}