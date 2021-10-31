import React from "react";
import "./SkillItem.css";

function SkillItem({ name, img, text, setSoftText }) {

    const softTextAdder = (name , newText)=>{
        setSoftText([name, newText]);
    };

    return(
        <div className="flex-softSkillitem" onClick= {()=>softTextAdder(name, text)}>
            <p className="flex-skillitem__p">{name}</p>
			<img className="flex-skillitem__img" src={img} alt="" />
        </div>
    );
};

export {SkillItem};