import { useState } from "react";

function NewBookForm({ onAddBook, user }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("https://bookitapi-production.up.railway.app/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                image: image,
                user_id: user.id,
                price: price,

            }),
        })
            .then((r) => r.json())
            .then((newBook) => {
                onAddBook(newBook)
                setImage("")
                setName("")
                setPrice("")
            });
    }

    return (
        <div className="new-book-form">
            <h4>New Book</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Book name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <input
                    type="number"
                    name="price"
                    step="0.01"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                />

                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default NewBookForm;
