const path = require('path');
const router = require('router');
const bookRoutes = require('.books.js');
const googleRoutes = require('.google.js');


// book routes

router.use("/books", books)