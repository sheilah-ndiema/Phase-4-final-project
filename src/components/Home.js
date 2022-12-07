import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";



function Home({ user, setUser }) {
    const navigate = useNavigate()

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
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
                    <p>Book-it! helps you sell, buy,booksArray and used books for the best price by
                        comparing offers from over 30
                        vendors with a single search.Reading academic material
                        isn’t always the most exciting activity,
                        it is sometimes necessary, especially if you are a college student, with an upcoming exam,
                        or conducting research to complete essays and papers for your course.</p>
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