import React from "react";
import { useObserver } from "../../useObserver";
import './ProjectsContainer.css';

function ProjectsContainer(props) {
    const ref = React.useRef(null);
	const [observed] = useObserver(ref);

    return(
        <div className={`grid-projects card fade-bot ${observed ? "appear" : ""}`} ref={ref}>
            {props.children}
        </div>
    );
};

export {ProjectsContainer};