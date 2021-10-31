import React from "react";
import './Footer.css';

function Footer() {
    return(
        <footer id="footer" class="flex-footer">
            <div class="footer__links">
                <a class="footer__link" href="https://www.linkedin.com/in/gustavo-ezequiel-romero-ab0b171b2/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                <a class="footer__link" href="https://www.instagram.com/romeroc.gus/" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
                <a class="footer__link" href="https://www.facebook.com/gus.romeroc/" target="_blank" rel="noreferrer"><i class="fab fa-facebook-square"></i></a>
                <a class="footer__link" href="https://github.com/romerocgus" target="_blank" rel="noreferrer"><i class="fab fa-github-square"></i></a>
            </div>
		    <p class="footer__text">Gustavo Ezequiel Romero Cañas 
                <span class="footer__copyright">© 2020</span>
            </p>
	</footer>
    );
};

export	{Footer};