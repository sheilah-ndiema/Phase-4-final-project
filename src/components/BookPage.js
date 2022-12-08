import { useEffect, useState } from "react";
import NewBookForm from "./NewBookForm";
import BookList from "./BookList";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import Socials from "./Socials";

function BookPage({ user }) {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        // no need to use http://localhost:3000 here
        fetch("https://bookitapi-production.up.railway.app/books")
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
            <div>
                <main>
                    <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                    <NewBookForm onAddBook={handleAddBook} user={user} />
                    <BookList books={displayedBooks} handleDeleteBook={handleDeleteBook} />
                </main>
                <Socials />
            </div>
        );
    } else {
        return navigate("/login")
    }

}

export default BookPage;
