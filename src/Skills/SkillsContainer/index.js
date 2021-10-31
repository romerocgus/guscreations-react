import React from "react";
import "./SkillsContainer.css";

function SkillsContainer(props) {
    return(
        <div className="skills-container">
            {props.children}
        </div>
    );
};

export {SkillsContainer};