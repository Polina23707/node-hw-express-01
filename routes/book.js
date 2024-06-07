import stor from '../stor'

const express = require('express')
const router = express.Router()

router.put('/api/books/:id', (req, res) => {
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

router.get('/api/books/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const idx = books.findIndex(el => el.id === id)
  
    res.json(books[idx])
})

router.delete('/api/books/:id', (req, res) => {
  const {books} = stor
  const {id} = req.params
  const idx = books.findIndex(el => el.id === id)
  
  books.splice(idx, 1)
  res.json(true)
})

module.exports = router