import React from "react";
import {SkillsContainer} from "./SkillsContainer";
import {SkillItem} from "./SkillItem";
import { useObserver } from "../useObserver";
import "./SoftSkills.css";

import friendlyIcon from "../Images/friendly.svg";
import GoogleIcon from "../Images/google.svg";
import ideaIcon from "../Images/idea.png";
import positiveIcon from "../Images/positive.svg";
import fastIcon from "../Images/rocket.svg";
import twIcon from "../Images/teamwork.svg";

const skillsArr = [
    {
        name: "Team Worker",
        img: twIcon,
        text: `I think that we are better if we work together!. I like to work with people to inspire and be inspired, share ideas and learn of each other.`
    },
    {
        name: "Creative",
        img: ideaIcon,
        text: "If there's something about this job that i like the most is that we can make reality our dreams!. I like to try different ways to make things happen, and bring creative solutions or ideas to play with."
    },
    {
        name: "Detail Oriented",
        img: GoogleIcon,
        text: "I have so much attention for details. I have no problem to do and re-do things in order to make them look the way you like or improve my code to make things more legible, more efficient, prettier."
    },
    {
        name: "Fast Learner",
        img: fastIcon,
        text: "I love to learn new things, the feels of improvement, and the satisfaction of unlock a new skill. As i enjoy it so much, i tend to involve a lot and learn fast."
    },
    {
        name: "Friendly",
        img: friendlyIcon,
        text: "That's it. I'm usually in a good mood, active listener, like to chat and you can count on me pretty much for everything."
    },
    {
        name: "Positive",
        img: positiveIcon,
        text: "I like to see the bright side of thing, if there is bad moments i try to cheer things up to raise the moral of the team."
    },
];


function SoftSkills() {
    const ref = React.useRef(null);
	const [observed] = useObserver(ref);
    const [softText, setSoftText] = React.useState([]);

    return (
        <section className={`flex-about__skillSoft card fade-right ${observed ? "appear" : ""}`} ref={ref}>
            <h3 className="card__title">Soft Skills</h3>
            <SkillsContainer>
                {skillsArr.map(skill => (
                    <SkillItem 
                        key={skill.name}
                        name={skill.name}
                        img={skill.img}
                        text={skill.text}
                        setSoftText={setSoftText}
                    />
                ))}
            </SkillsContainer>
            <p className="softSkills__textTitle">{softText[0]}</p>
            <p className="softSkills__text">{softText[1]}</p>
        </section>
    );
};

export {SoftSkills};