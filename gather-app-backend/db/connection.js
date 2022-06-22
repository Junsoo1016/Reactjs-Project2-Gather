const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/users_db', { useNewUrlParser: true} )

mongoose.Promise = Promise

module.exports = mongoose
