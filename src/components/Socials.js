import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


function Socials() {
    return (
        <div className="socials">
            <FontAwesomeIcon icon={faDiceTwo} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
        </div>
    )
};

export default Socials;