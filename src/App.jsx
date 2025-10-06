import { useState } from "react";
import BookCard from "./BookCard";
import BookModal from "./BookModal";
import booksData from "../data/books.json";
import "./index.css";

function App() {
    const [books, setBooks] = useState(booksData);
    const [showModal, setShowModal] = useState(false);
    const [selectedBooks, setSelectedBooks] = useState(new Set());

    const handleBook = (isbn13) => {
        setBooks(books.filter((book) => book.isbn13 !== isbn13));
        setSelectedBooks((prev) => {
            const newSet = new Set(prev);
            newSet.delete(isbn13);
            return newSet;
        });
    };

    return (
        <>
            <div className="app">
                <div className="header">
                    <h1>Book Shop Catalog</h1>
                </div>
                <div className="content">
                    <div className="content-books">
                        {books.map((book) => (
                            <BookCard
                                key={book.isbn13}
                                book={book}
                                isSelected={selectedBooks.has(book.isbn13)}
                                onSelect={() => handleBookSelect(book.isbn13)}
                            />
                        ))}
                    </div>
                    <div className="btn">
                        <button onClick={() => setShowModal(true)}>
                            Add Book
                        </button>
                    </div>
                </div>

                <BookModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onSubmit={handleBookSubmit}
                />

                <div className="footer">
                    <div>Leana Le © 2025 Book Shop</div>
                </div>
            </div>
        </>
    );
}

export default App;
