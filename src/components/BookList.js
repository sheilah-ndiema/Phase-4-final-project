import BookCard from "./BookCard";

function BookList({ books, handleDeleteBook }) {
    return (
        <ul className="cards">
            {books?.map((book) => {
                return <BookCard key={book.id} book={book} handleDeleteBook={handleDeleteBook} />;
            })}
        </ul>
    );
}

export default BookList;
