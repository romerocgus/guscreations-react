import React from "react";
import {SkillsContainer} from "./SkillsContainer";
import {SkillItem} from "./SkillItem";
import {useObserver} from "../useObserver";

import "./Skills.css";

import bsIcon from "../Images/bootstrap.svg";
import cssIcon from "../Images/css.svg";
import gitIcon from "../Images/git.svg";
import htmlIcon from "../Images/html.svg";
import aiIcon from "../Images/illustrator.svg";
import jsIcon from "../Images/javascript.svg";
import npmIcon from "../Images/npm.png";
import psIcon from "../Images/photoshop.svg";
import reactIcon from "../Images/react.png";
import responsiveIcon from "../Images/responsive.svg";
import wcIcon from "../Images/Webcomponents.png";
import wpIcon from "../Images/webpack.png";

const skillsArr = [
    {
        name: "Javascript",
        img: jsIcon
    },
    {
        name: "HTML",
        img: htmlIcon
    },
    {
        name: "CSS",
        img: cssIcon
    },
    {
        name: "React",
        img: reactIcon
    },
    {
        name: "Web Components",
        img: wcIcon
    },
    {
        name: "Webpack",
        img: wpIcon
    },
    {
        name: "NPM",
        img: npmIcon
    },
    {
        name: "GIT",
        img: gitIcon
    },
    {
        name: "Responsive",
        img: responsiveIcon
    },
    {
        name: "Bootstrap",
        img: bsIcon
    },
    {
        name: "Illustrator",
        img: aiIcon
    },
    {
        name: "Photoshop",
        img: psIcon
    },
];

function Skills() {

    const ref = React.useRef(null);
	const [observed] = useObserver(ref);

    return(
        <section className={`flex-about__skills card fade-left ${observed ? "appear" : ""}`} ref={ref}>
            <h3 className="card__title">Technologies i use</h3>
            <SkillsContainer>
                {skillsArr.map(skill => (
                    <SkillItem 
                        key={skill.name}
                        text={skill.name}
                        img={skill.img}
                    />
                ))}
            </SkillsContainer>
        </section>
    );
};

export {Skills};