import express from "express";
import { AuthorsController } from "../controllers/authors.controller.js";

const router = express.Router();

router.get("/authors", AuthorsController.getAuthors);
router.get("/authors/:id", AuthorsController.getAuthor);
router.post("/authors", AuthorsController.addAuthor);
router.put("/authors/:id", AuthorsController.updateAuthor);
router.delete("/authors/:id", AuthorsController.deleteAuthor);

export default router;
