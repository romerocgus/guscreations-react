import React from "react";
import "./About.css"

function About(props){
    return(
        <main id="About" className="grid-about section">
            {props.children}
	    </main>
    )
}

export {About};