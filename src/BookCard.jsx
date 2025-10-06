function BookCard({ book, isSelected, onSelect, onRemove }) {
    const handleCardClick = (e) => {
        // Prevent card selection when clicking on links or buttons
        if (e.target.closest("a") || e.target.closest("button")) {
            return;
        }
        onSelect();
    };

    return (
        <div
            className={`card ${isSelected ? "card-selected" : ""}`}
            onClick={handleCardClick}
        >
            <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="image">
                    <img
                        src={book.image}
                        alt={book.title}
                    />
                </div>
                <div className="title">
                    <h2>{book.title}</h2>
                </div>
                <div className="price">
                    <p>Price: {book.price}</p>
                </div>
            </a>
        </div>
    );
}

export default BookCard;
