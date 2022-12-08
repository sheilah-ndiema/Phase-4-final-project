import React from 'react'
import Socials from "./Socials";


function About() {
    return (

        <div>
            <div className='about' id='about'>
                <div className='a'>
                    <p style={{ fontSize: "50px" }}> Get access to the hottest book flipping deals based
                        on our data! We've worked out the way to find and immediately deliver
                        this information to you; your job is to react fast and earn your
                        reselling profit without effort!Contact us in any of our social
                        platforms for more information.

                    </p>
                </div>
                <div id='scouter'>
                    <img src="https://bookscouter.com/blog/wp-content/uploads/2016/09/aboutbookscouter.png" alt="Top 10 Best Comic Books of All Time" />
                </div>
            </div>
            <Socials />
        </div>
    )
}

export default About



