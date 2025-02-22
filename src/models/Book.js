import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "authors",
    required: true,
  },
  publisher: { type: String, required: true },
  numPages: { type: Number },
});

export default mongoose.model("books", bookSchema);
