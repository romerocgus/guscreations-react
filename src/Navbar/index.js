import React from "react";
import './Navbar.css';

const navItemsArr = [
	{
		title: "Home",
		url: "/",
	},
	{
		title: "About",
		url: "#About",
	},
	{
		title: "Projects",
		url:"#Projects",
	},
	{
		title: "Contact",
		url: "#Contact",
	},
];

function Navbar(){
	const [visible, setVisible] = React.useState(false);
	const [activeLink, setActiveLink] = React.useState("");

	const toggleList = ()=>{
		setVisible(!visible);
	};

	const handlerActive = (text)=>{
		setActiveLink(text);
	}

    return(
        <nav className="navbar">
			<div className={`navbar__button ${visible ? 'cross :' : ""}`} onClick={toggleList}>
			</div>
			<ul className={`navbar__list-items ${visible ? 'list-active': ""}`}>

				{navItemsArr.map(item => {
					return (
					<li key={item.title} className={`navbar__item ${activeLink === item.title ? "active" : ""}`}onClick={()=>handlerActive(item.title)}><a href={item.url} className="navbar__link">{item.title}</a></li>
				)})}
			</ul>
		</nav>
    )
}

export {Navbar};