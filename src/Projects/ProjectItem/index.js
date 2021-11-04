import React from "react";
import './ProjectItem.css';

function ProjectItem({title, img, size, text, url ,setOpenModal}) {

    const modalOpener = (title, text, url) => {
        setOpenModal({title, text, url});
    }

    return(
        <figure className={`grid-projects__item grid-projects__${size}`} tabIndex="0" onClick={()=>modalOpener(title, text, url)}>
            <img className="grid-projects__img" src={img} alt="" />
            <figcaption className="grid-projects__caption">
                <h3 className="project-title">{title}</h3>
            </figcaption>
        </figure>
    );
};

export {ProjectItem};