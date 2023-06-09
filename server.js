// initializing server port

const app = require('./api/app.js');

//using dotenv for accessing environment variables
require('dotenv').config()

const PORT = `${process.env.PORT}`;


//server listening on port for incoming requests
app.listen(PORT, () => {

    console.log(`running on port ${PORT}`)
})