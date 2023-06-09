//initializing node JS application

const express = require('express')

const userRouter = require('./routes/users-router.js')
const productRouter = require('./routes/product-router.js')
const imageRouter = require('./routes/images-router.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//initializing app to use routes 
app.use('/', userRouter)

app.use('/v1/product', productRouter)

app.use('/v1', imageRouter)


app.use('*', (req, res) => {
    res.status(400).send('Invalid route')
})

module.exports = app