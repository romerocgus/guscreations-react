import React from "react";
import "./SkillItem.css";

function SkillItem({ text, img }) {
    return(
        <div className="flex-skillitem">
            <p className="flex-skillitem__p">{text}</p>
			<img className="flex-skillitem__img" src={img} alt="" />
        </div>
    );
};

export {SkillItem};