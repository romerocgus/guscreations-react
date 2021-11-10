import React from "react";
import './Header.css'

const Header = (React.forwardRef((props, ref) => {
    
    return(
        <header className= "header" ref={ref}>
            <h1 className="header__title">Hi, Welcome!</h1>
            <span className="header__firstlane">My name is Gus and i'm a front-end developer. Let's make something awesome!</span>
            <p className="header__text">I'm really passionate about creating the best experiences for the users through beautiful and simple UI. Feel free to check out my Bio and some of my projects down below and if you like what i do and want to connect, please leave me a message.</p>
			<a className="header__link" href="#About">
				<i className="fas fa-chevron-down"></i>
			</a>
        </header>
    )
}))
export {Header};