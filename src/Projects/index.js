import React from "react";
import {ProjectsContainer} from "./ProjectsContainer";
import {ProjectItem} from "./ProjectItem";
import { Modal } from '../Modal';
import './Projects.css';

import personalPageImg from "../Images/webpage.jpg";
import harryImg from "../Images/harryPotter.jpg";

const projectArr = [
    {
        title: "Personal Page",
        img: personalPageImg,
        size: "long",
        text: "This project was made using React and pure CSS. Fully responsive, with a minimalist palette of colors, nice and clean UI, and with lots of animations and effects to bring life to it. I hope you like it",
        url: "http://guscreations.net"
    },
    {
        title: "Project Two",
        img: harryImg,
        size: "tall",
        text: "This is the second project, more magic coming soon...",
        url: ""
    },
    {
        title: "Project Three",
        img: harryImg,
        size: "med",
        text: "This is the third project, more magic coming soon...",
        url: ""
    },
    {
        title: "Project Four",
        img: harryImg,
        size: "med",
        text: "This is the fourth project, more magic coming soon...",
        url: ""
    },
];

function Projects() {
    const [openModal, setOpenModal] = React.useState(null);

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
                        text={project.text}
                        url={project.url}
                        setOpenModal={setOpenModal}
                    />
                ))}
            </ProjectsContainer>
            {!!openModal && (
				<Modal>
                    <div className= "modal-background" onClick={()=>setOpenModal(null)}>
                        <div className="projects-modal">
                            <i className="modal-closer fas fa-times-circle" onClick={()=>setOpenModal(null)}></i>
                            <h3 className="modal__title card__title">{openModal.title}</h3>
                            <p className="modal__text">{openModal.text}</p>
                            <a className="modal__link" href={openModal.url} target="_blank" rel="noreferrer" onClick={()=>setOpenModal(null)}>See more</a>
                        </div>
                    </div>
			    </Modal>
			)}
        </section>
    );
};

export {Projects};