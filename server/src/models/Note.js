import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
  },
  { timestamps: true } // createdAt updatedAt
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
