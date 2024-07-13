const express = require('express');

const logger = require('./middleware/logger')
const error404 = require('./middleware/err-404')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const booksRouter = require('./routes/books')

const app = express();
app.use(express.urlencoded());
app.set('view engine', 'ejs');

app.use(logger)

app.use('/public', express.static(__dirname+'/public'))
app.use('/api', indexRouter)
app.use('/api/user/login', userRouter)
app.use('/api/books', booksRouter)

app.use(error404)

const PORT = process.env.PORT || 3000
app.listen(PORT)