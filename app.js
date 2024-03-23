const express = require('express')
const app = express();
const errorMiddleware = require('./middlewares/error')
const cookieParser = require('cookie-parser')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config({path:path.join(__dirname,"config/config.env")});
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname,'uploads')))

const products = require('./routes/product')
const auth = require('./routes/auth')
const order = require('./routes/order')
const category = require('./routes/category')
const payment = require('./routes/payment')

app.use('/api/v1/',products)
app.use('/api/v1/',auth)
app.use('/api/v1/',order)
app.use('/api/v1/',category)
app.use('/api/v1/',payment)





app.use(errorMiddleware)
module.exports = app;