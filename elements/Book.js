const {v4: uuid} = require('uuid');

class Book {
  constructor(id = uuid(), title = "", description = "", authors = "" , favorite = "", fileCover = "", fileName = "", fileBook = "ttps://i.work.ua/article/1161b.jpg?v=1713862773") {
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

export default Book;