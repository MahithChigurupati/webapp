// defining routes to route request calls to corresponding methods

const productController = require('../controllers/product-controller.js')

const router = require('express').Router()

//Route for POST method
router.post('/product', productController.add)

//Route for GET method
router.get('/product/:id', productController.retrieve)

//Route for PUT method
router.put('/product/:id', productController.update)

//Route for PATCH method
router.patch('/product/:id', productController.replace)

//Route for DELETE method
router.delete('/product/:id', productController.remove)

module.exports = router