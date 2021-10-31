import React from "react";
import {Formulary} from "./Formulary";
import './Contact.css';

function Contact() {
    return(
        <section id="Contact" className="grid-section-contact section">
            <h2 className="subtitle fade-left" >Lets Talk</h2>
            <Formulary />
	</section>
    );
};

export {Contact};