import { useEffect, useState } from "react";
import NewBookForm from "./NewBookForm";
import BookList from "./BookList";
import Search from "./Search";
import Login from "./Login";

function BookPage() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        // no need to use http://localhost:3000 here
        fetch("/books")
            .then((r) => r.json())
            .then((booksArray) => {
                setBooks(booksArray);
            });
    }, []);

    function handleAddBook(newBook) {
        const updatedBooksArray = [...books, newBook];
        setBooks(updatedBooksArray);
    }
    function handleDeleteBook(bookId) {
        const updatedBooksArray = [...books].filter(book => book.id !== bookId);
        setBooks(updatedBooksArray);
    }

    const displayedBooks = books.filter((book) => {
        return book.name.toLowerCase().includes(searchTerm.toLowerCase());
    });


    if (user) {
        return (
            <main>

                <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                <NewBookForm onAddBook={handleAddBook} user={user} />
                <BookList books={displayedBooks} handleDeleteBook={handleDeleteBook} />
            </main>
        );
    } else {
        return <Login onLogin={setUser} />;
    }
}

export default BookPage;
