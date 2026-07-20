const pool = require("../config/db");

const createBook = async ({ title, author, genre, price, published_year }) => {
  const query = `INSERT INTO books(
  title,
  author,
  genre,
  price,
  published_year
  )
  VALUES($1, $2, $3, $4, $5)
  RETURNING *;
  `;

  const values = [title, author, genre, price, published_year];

  const result = await pool.query(query, values);

  return result.rows[0];
};

const getAllBooks = async () => {
  const query = `SELECT * FROM books`;

  const result = await pool.query(query);
  return result.rows;
};

const getBookById = async (id) => {
  const query = `SELECT * FROM books WHERE id = $1`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const updateBook = async (
  id,
  { title, author, genre, price, published_year },
) => {
  const query = `UPDATE books
  SET
  title = $1,
  author = $2,
  genre = $3,
  price = $4,
  published_year = $5, 
  updated_at = CURRENT_TIMESTAMP
  WHERE id = $6
  RETURNING *;
  `;

  const values = [title, author, genre, price, published_year, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteBook = async (id) => {
  const query = `DELETE FROM books WHERE id=$1 RETURNING *;`;
  const result = await pool.query(query, [id]);
  return result.rows;
};
module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
