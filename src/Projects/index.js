import React from "react";
import {ProjectsContainer} from "./ProjectsContainer";
import {ProjectItem} from "./ProjectItem";
import './Projects.css';

import personalPageImg from "../Images/webpage.jpg";
import harryImg from "../Images/harryPotter.jpg";

const projectArr = [
    {
        title: "Personal Page",
        img: personalPageImg,
        size: "long"
    },
    {
        title: "Project Two",
        img: harryImg,
        size: "tall"
    },
    {
        title: "Project Three",
        img: harryImg,
        size: "med" 
    },
    {
        title: "Project Four",
        img: harryImg,
        size: "med" 
    },
];

function Projects() {
    return(
        <section id="Projects" className="grid-section-project section">
            <h2 className="subtitle fade-right" >My Projects</h2>
            <ProjectsContainer>
                {projectArr.map(project => (
                    <ProjectItem 
                        key={project.title}
                        title={project.title}
                        img={project.img}
                        size={project.size}
                    />
                ))}
            </ProjectsContainer>
        </section>
    );
};

export {Projects};