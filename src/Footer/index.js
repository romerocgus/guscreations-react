import React from "react";
import './Footer.css';

function Footer() {
    return(
        <footer id="footer" className="flex-footer">
            <div className="footer__links">
                <a className="footer__link" href="https://www.linkedin.com/in/gustavo-ezequiel-romero-ab0b171b2/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                <a className="footer__link" href="https://www.instagram.com/romeroc.gus/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                <a className="footer__link" href="https://www.facebook.com/gus.romeroc/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
                <a className="footer__link" href="https://github.com/romerocgus" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
            </div>
		    <p className="footer__text">Gustavo Ezequiel Romero Cañas 
                <span className="footer__copyright">© 2020</span>
            </p>
	</footer>
    );
};

export	{Footer};