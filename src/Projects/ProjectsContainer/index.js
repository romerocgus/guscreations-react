import React from "react";
import './ProjectsContainer.css';

function ProjectsContainer(props) {
    return(
        <div className="grid-projects card fade-bot">
            {props.children}
        </div>
    );
};

export {ProjectsContainer};