const express = require('express');
const cors = require('cors');
const route = require('./routes/PNCCafeRoutes')

const app = express();

app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json())
app.use(express.urlencoded())
app.use(route)

app.listen(3001)