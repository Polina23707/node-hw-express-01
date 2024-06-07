import stor from '../stor'
import Book from '../elements/Book'

const express = require('express')
const router = express.Router()

router.get('/api/books', (req, res) => {
    const {books} = stor
    res.json(books)
})

router.post('/api/books', (req, res) => {
    const {books} = stor;
    const newBook = new Book();
    books.push(newBook);
    res.send(newBook);
})

module.exports = router