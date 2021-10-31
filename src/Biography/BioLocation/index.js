import React from "react";
import loc from "../../Images/location.svg";
import './BioLocation.css';

function BioLocation(){
    return(
        <div className="bio__location">
				<img className="location-img" src={loc} alt="" />
				<p className="location-text">currently living in Valencia, Spain. Available to work worldwide!</p>
		</div>
    )
};

export {BioLocation};