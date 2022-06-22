const express = require('express')
const parser = require('body-parser')
const app = express()

const usersController = require('./controllers/users')
const postsController = require('./controllers/posts')

//middleware
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.use('/api/users/', usersController)
app.use('/api/posts/', postsController)

app.listen(3000, () => console.log('Server running on port 3000'))