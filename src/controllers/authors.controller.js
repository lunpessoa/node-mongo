import authors from "../models/Author.js";

export class AuthorsController {
  static getAuthors(req, res) {
    authors.find((err, authors) => {
      res.status(200).send(authors);
    });
  }

  static getAuthor(req, res) {
    const { id } = req.params;

    authors.findById(id, (err, author) => {
      if (err || !author) res.status(404).send({ message: err?.message });
      else res.status(200).send(author);
    });
  }

  static addAuthor(req, res) {
    const author = new authors(req.body);

    author.save((err) => {
      if (err) res.status(500).send({ message: err.message });
      else res.status(201).send(author.toJSON());
    });
  }

  static updateAuthor(req, res) {
    const { id } = req.params;

    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) res.status(500).send({ message: err.message });
      else res.status(200).send({ message: "Author updated successfully" });
    });
  }

  static deleteAuthor(req, res) {
    const { id } = req.params;

    authors.findOneAndDelete(id, (err) => {
      if (err) res.status(500).send({ message: err.message });
      else res.status(200).send({ message: "Author deleted successfully" });
    });
  }
}
