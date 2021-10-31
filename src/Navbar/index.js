import React from "react";
import './Navbar.css';

function Navbar(){
	const [visible, setVisible] = React.useState(false);

	const toggleList = ()=>{
		setVisible(!visible);
	}

    return(
        <nav className="navbar">
		<div className={`navbar__button ${visible && 'cross'}`} onClick={toggleList}>
		</div>
		<ul className={`navbar__list-items ${visible && 'list-active'}`}>
			<li className="navbar__item "><a href="index.html" className="navbar__link">Home</a></li>
			<li className="navbar__item"><a href="#About" className="navbar__link">About</a></li>
			<li className="navbar__item"><a href="#Projects" className="navbar__link">Projects</a></li>
			<li className="navbar__item"><a href="#Contact" className="navbar__link">Contact</a></li>
		</ul>
	</nav>
    )
}

export {Navbar};