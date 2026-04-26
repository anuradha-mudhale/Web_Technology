const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());

const filePath = path.join(__dirname, 'books.json');

// =========================
//  READ / SAVE
// =========================
const getbooks = () => {
    const data = fs.readFileSync(filePath);//gives JSON text
    return JSON.parse(data); //converts into usable array/object
};

const saveBooks = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// =========================
// GET BOOKS
// =========================
app.get('/book', (req, res) => {
    res.json(getbooks());
});

// =========================
// ADD BOOK   
// =========================
app.post('/book', (req, res) => {
    const books = getbooks();
    const newbook = req.body;

    newbook.id = Date.now();
    newbook.issued = false;
    newbook.issuedTo = "";
    newbook.issueDate = null;
    newbook.returnDate = null;
    newbook.history = [];

    books.push(newbook);
    saveBooks(books);

    res.json({ message: "Book added successfully" });
});


// ISSUE BOOK

app.put('/book/issue/:id', (req, res) => {
    const books = getbooks();
    const bookId = parseInt(req.params.id);

    const { issuedTo, issueDate, returnDate } = req.body;

    const bookIndex = books.findIndex(b => b.id == bookId);

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    if (books[bookIndex].issued) {
        return res.status(400).json({ message: "Book already issued" });


    }

    books[bookIndex].issued = true;
    books[bookIndex].issuedTo = issuedTo;
    books[bookIndex].issueDate = issueDate;
    books[bookIndex].returnDate = returnDate;

    saveBooks(books);

    res.json({ message: "Book issued successfully" });
});

// =========================
// 🔁 RETURN BOOK
// =========================
app.put('/book/return/:id', (req, res) => {
    const books = getbooks();
    const bookId = parseInt(req.params.id);

    const { studentName, actualReturnDate } = req.body;

    const bookIndex = books.findIndex(b => b.id == bookId);

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    if (!books[bookIndex].issued) {
        return res.status(400).json({ message: "Book is not issued" });
    }

    // add to history
    books[bookIndex].history.push({
        student: studentName,
        returnedOn: actualReturnDate
    });

    books[bookIndex].issued = false;
    books[bookIndex].issuedTo = "";
    books[bookIndex].issueDate = null;
    books[bookIndex].returnDate = null;

    saveBooks(books);

    res.json({ message: "Book returned successfully" });
});

// =========================
// 📜 GET HISTORY
// =========================
app.get('/history', (req, res) => {
    const books = getbooks();
    const history = [];

    books.forEach(book => {

        // current issued
        if (book.issued) {
            history.push({
                id: book.id,
                name: book.name || "-",
                student: book.issuedTo,
                date: book.issueDate,
                type: "Issued"
            });
        }

        // returned history
        if (book.history && book.history.length > 0) {
            book.history.forEach(h => {
                history.push({
                    id: book.id,
                    name: book.name || "-",
                    student: h.student,
                    date: h.returnedOn,
                    type: "Returned"
                });
            });
        }

    });

    res.json(history);
});

// =========================
// ❌ DELETE HISTORY
// =========================
app.delete('/history', (req, res) => {
    const { id, student, date, type } = req.body;

    let books = getbooks();

    books = books.map(book => {

        if (book.id == id) {

            if (type === "Returned") {
                book.history = book.history.filter(h =>
                    !(h.student === student && h.returnedOn === date)
                );
            }

            if (type === "Issued") {
                book.issued = false;
                book.issuedTo = "";
                book.issueDate = null;
                book.returnDate = null;
            }
        }

        return book;
    });

    saveBooks(books);

    res.json({ message: "Deleted successfully" });
});

// =========================
// 🚀 START SERVER
// =========================
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});