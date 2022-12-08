import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";



function Home({ user, setUser }) {
    const navigate = useNavigate()

    function handleLogoutClick() {
        fetch("https://bookitapi-production.up.railway.app/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
                navigate("/home")
            }
        });
    }

    return (
        <div id='home' className='home'>
            <div className="container">
                <div className="tagline">
                    <div id="heading">

                        <h1 style={{ fontWeight: "bolder" }}>All about books!</h1>
                    </div>
                    <p> <span id="book-it">Book-it</span> helps you sell, and buy used books for the best price by
                        comparing offers from different
                        vendors with a single search.With one simple search we connect you to various
                        companies buying used textbooks online. By comparing textbook buyback prices,
                        we ensure you receive the best prices for your textbooks. Quickly scan tons of books,
                        at any time from the convenience of your phone
                        for free!</p>
                    <div>
                        <button id="button">
                            {user ? <NavLink className="btn-register" to='/bookpage'>Visit Store</NavLink> : <NavLink className="btn-register" to='/signup'>Register</NavLink>}
                        </button>
                        {user && <button id="button" onClick={handleLogoutClick}>logout
                        </button>}
                    </div>
                </div>

                <div id="image">
                    <img src='../images/landscape.jpeg' alt="hero-section" />
                    <img src='../images/spanish.jpeg' alt="hero-section" />
                </div>
            </div>
        </div>
    )
}

export default Home;