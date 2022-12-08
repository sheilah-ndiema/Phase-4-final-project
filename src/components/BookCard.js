import { useState } from "react";

function BookCard({ book, handleDeleteBook }) {
    const { name, image, price } = book;

    const [isInStock, setIsInStock] = useState(true);

    function handleToggleStock() {
        setIsInStock((isInStock) => !isInStock);
    }

    function handleDelete() {
        fetch(`https://bookitapi-production.up.railway.app//books${book.id}`, {
            method: "DELETE",
        }).then(() => handleDeleteBook(book.id))
    }

    return (
        <li className="card">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            {isInStock ? (
                <button className="primary" onClick={handleToggleStock}>
                    In Stock
                </button>
            ) : (
                <button onClick={handleToggleStock}>Out of Stock</button>
            )}
            <button className="primary" onClick={handleDelete}>
                Delete
            </button>
        </li>
    );
}

export default BookCard;
