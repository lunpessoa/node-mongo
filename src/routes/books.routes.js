import express from "express";
import { BooksController } from "../controllers/books.controller.js";

const router = express.Router();

router.get("/books", BooksController.getBooks);
router.get("/books/:id", BooksController.getBook);
router.post("/books", BooksController.addBook);
router.put("/books/:id", BooksController.updateBook);
router.delete("/books/:id", BooksController.deleteBook);

export default router;
