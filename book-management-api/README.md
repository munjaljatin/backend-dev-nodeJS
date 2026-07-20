# Book Management API

A learning project to build a REST API using **Node.js**, **Express**, and **PostgreSQL**.

## Tech Stack

- Node.js
- Express
- PostgreSQL
- pg
- dotenv
- nodemon

## Project Goals

- Learn how Express communicates with PostgreSQL.
- Build a REST API from scratch.
- Write parameterized SQL queries.
- Follow a simple MVC-like project structure.

## API (Planned)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /books | Create a book |
| GET | /books | Get all books |
| GET | /books/:id | Get a book by ID |
| PUT | /books/:id | Update a book |
| DELETE | /books/:id | Delete a book |

Additional features:

- Search
- Filtering
- Sorting
- Pagination

## Project Structure

```text
book-management-api/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── bookController.js
│   ├── models/
│   │   └── bookModel.js
│   ├── routes/
│   │   └── bookRoutes.js
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

## Installation

```bash
npm install
```

Install required packages:

```bash
npm install express pg dotenv
npm install --save-dev nodemon
```

## package.json Scripts

```json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
}
```

## Environment Variables

Create a `.env` file:

```env
PORT=5000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=book_management
```

## Database Setup

Create the database:

```sql
CREATE DATABASE book_management;
```

List databases:

```sql
\l
```

Connect to the database:

```sql
\c book_management
```

## Progress

- [x] Initialize project
- [x] Install dependencies
- [x] Create folder structure
- [x] Configure environment variables
- [x] Create PostgreSQL database
- [ ] Connect Express to PostgreSQL
- [ ] Create Books table
- [ ] Implement CRUD APIs
- [ ] Search, Filter, Sort
- [ ] Pagination
- [ ] Validation
- [ ] Error Handling
- [ ] Indexing
