import Header from "./Header";
import BookPage from "./BookPage";
import { useEffect, useState } from 'react'
import NavBar from "./NavBar"
import LoginForm from "./Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home"
import About from "./About";
import SignupForm from "./SignupForm.js";


function App() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    function onLogin(user) {
        setUser(user)
        return navigate("/bookPage")
    }
    useEffect(() => {
        fetch("https://bookitapi-production.up.railway.app/me").then(res => {
            if (res.ok) {
                res.json().then(data => setUser(data))
            }
        })
    }, [])
    return (
        <div className="app">
            <Header />
            <NavBar />
            <Routes>
                <Route exact path='/home' element={<Home user={user} setUser={setUser} />} />
                <Route exact path='/' element={<Home user={user} setUser={setUser} />} />
                <Route exact path='/signup' element={<SignupForm onLogin={onLogin} />} />
                <Route exact path='/login' element={<LoginForm onLogin={onLogin} />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/bookpage' element={<BookPage user={user} />} />
            </Routes>
        </div >
    );
}

export default App;