import Header from "./Header";
import BookPage from "./BookPage";
import NavBar from "./NavBar"
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import About from "./About";


function App() {
    return (
        <div className="app">
            <Header />
            <NavBar />
            <Routes>
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/bookPage' element={<BookPage />} />
            </Routes>



        </div>
    );
}

export default App;