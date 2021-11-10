import React from "react";
import {BioContent} from "./BioContent";
import {BioLocation} from "./BioLocation";
import {BioNav} from "./BioNav";
import {useObserver} from "../useObserver";
import './Biography.css';

function Biography(){
    const ref = React.useRef(null);
    const [observed] = useObserver(ref);
    const [page, setPage] = React.useState(0);

    return(
        <section className={`grid-about__bio card fade-bot ${observed ? "appear" : ""}`} ref= {ref}>
            <BioContent 
                page = {page} 
            />
            <BioLocation />
            <BioNav 
                page = {page} 
                setPage = {setPage}
            />
        </section>
    )
}

export {Biography};