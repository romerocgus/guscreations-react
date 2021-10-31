import React from "react";
import {BioContent} from "./BioContent";
import {BioLocation} from "./BioLocation";
import {BioNav} from "./BioNav";
import './Biography.css';

function Biography(){
    const [page, setPage] = React.useState(0);
    return(
        <section className="grid-about__bio card fade-bot">
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