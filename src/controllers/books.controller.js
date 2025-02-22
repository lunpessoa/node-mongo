import books from "../models/Book.js";

export class BooksController {
  static getBooks(req, res) {
    const { publisher } = req.query;
    const query = publisher ? { publisher } : {};

    books
      .find(query)
      .populate("author")
      .exec((err, books) => {
        if (err) return res.status(500).send({ message: err.message });
        res.status(200).send(books);
      });
  }

  static getBooksByPublisher(req, res) {
    const { publisher } = req.query;

    books
      .find({ publisher })
      .populate("author")
      .exec((err, books) => {
        if (err) res.status(500).send({ message: err?.message });
        res.status(200).send(books);
      });
  }

  static getBook(req, res) {
    const { id } = req.params;

    books
      .findById(id)
      .populate("author", { name: true })
      .exec((err, book) => {
        if (err || !book) res.status(404).send({ message: err?.message });
        else res.status(200).send(book);
      });
  }

  static addBook(req, res) {
    const book = new books(req.body);

    book.save((err) => {
      if (err) res.status(500).send({ message: err.message });
      else res.status(201).send(book.toJSON());
    });
  }

  static updateBook(req, res) {
    const { id } = req.params;

    books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) res.status(500).send({ message: err.message });
      else res.status(200).send({ message: "Book updated successfully" });
    });
  }

  static deleteBook(req, res) {
    const { id } = req.params;

    books.findOneAndDelete(id, (err) => {
      if (err) res.status(500).send({ message: err.message });
      else res.status(200).send({ message: "Book deleted successfully" });
    });
  }
}
