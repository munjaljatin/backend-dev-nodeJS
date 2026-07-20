const bookModel = require("../models/bookModel");

const createBook = async (req, res) => {
  try {
    const { title, author, genre, price, published_year } = req.body;

    const book = await bookModel.createBook({
      title,
      author,
      genre,
      price,
      published_year,
    });

    res.status(201).json({
      success: true,
      data: book,
    });
    alert("Success");
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.getAllBooks();

    res.status(200).json({
      message: "Books Fetched Successfully",
      success: true,
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.getBookById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book Not Found!",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book fetched succesfully",
      data: book,
    });
  } catch (err) {
    console.err(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, genre, price, published_year } = req.body;

    const updateBook = await bookModel.updateBook(id, {
      title,
      author,
      genre,
      price,
      published_year,
    });
    if (!updateBook) {
      return res.status(404).json({
        success: false,
        message: "Book Not Found!",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updateBook,
    });
  } catch (err) {
    console.err(err);
    res.status(500).json({
      success: false,
      message: "Book Not Found!",
    });
  }
};

// controller for delete
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await bookModel.deleteBook(id);
    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book Not Found!",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book Deleted Successfully",
      data: deletedBook,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const patchBook = async (req, res) => {
  try {
    const { id } = req.params;
    const patchedBook = await bookModel.patchBook(id, req.body);

    if (!patchedBook) {
      return res.status(404).json({
        success: false,
        message: "Book Not Found!",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book Patched Successfully",
      data: patchedBook,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  patchBook,
  deleteBook,
};
