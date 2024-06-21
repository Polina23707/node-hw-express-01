const express = require('express')
const router = express.Router()
const fileMulter = require('../middleware/file');

// Не работает через импорт
// import stor from '../elements/stor'
// import Book from '../elements/Book'

const {v4: uuid} = require('uuid');


class Book {
  constructor(id = uuid(), title = "", description = "", authors = "" , favorite = "", fileCover = "", fileName = "", fileBook = "https://i.work.ua/article/1161b.jpg?v=1713862773") {
    this.id = id
    this.title = title
    this.description = description
    this.authors = authors
    this.favorite = favorite
    this.fileCover = fileCover
    this.fileName = fileName 
    this.fileBook = fileBook
  }
}

const stor = {
    books: [
      new Book(),
      new Book(),
      new Book(),
      new Book(),
    ],
  };

router.get('/', (req, res) => {
    const {books} = stor
    res.json(books)
})
.post('/', (req, res) => {
    const {books} = stor;
    const newBook = new Book();
    books.push(newBook);
    res.send(newBook);
})
.get('/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const idx = books.findIndex(el => el.id === id)
  
    res.json(books[idx])
})
.delete('/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const idx = books.findIndex(el => el.id === id)
    
    books.splice(idx, 1)
    res.json(true)
})
.put('/:id', (req, res) => {
    const {books} = stor
    const {title, description, authors, favorite, fileCover, fileName, fileBook } = req.body
    const {id} = req.params
    const idx = books.findIndex(el => el.id === id)
  
    books[idx] = {
      ...books[idx],
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName,
      fileBook,
    }
    res.json(books[idx])
})
.get('/:id/download', fileMulter.single('book'), (req, res) => {
    if (req.fileBook) {
        const {path} = req.fileBook;
        console.log(path);
        res.json(path);
        res.download(path);
        } else {
        res.json(null);
    }
})

module.exports = router