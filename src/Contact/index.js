import React from "react";
import {Formulary} from "./Formulary";
import { useObserver } from "../useObserver";
import './Contact.css';

function Contact () {
    const ref = React.useRef(null);
	const [observed] = useObserver(ref);

    return(
        <section id="Contact" className="grid-section-contact section">
            <h2 id="title" className={`subtitle fade-left ${observed ? "appear" : ""}`} ref= {ref}>Lets Talk</h2>
            <Formulary />
	</section>
    );
};

export {Contact};