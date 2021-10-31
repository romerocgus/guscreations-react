import React from "react";
import './Formulary.css';

function Formulary(){
    return(
        <form className="flex-form card fade-bot">
            <input type="text" name="name" className="form__input" id="name" placeholder="Your Name" required />
            <span className="input-error">please, insert a valid name. Must have at least 3 characters</span>
            <input type="email" name="email" className="form__input" id="mail" placeholder="Your e-mail" required />
            <span className="input-error">please, insert a valid e-mail.</span>
            <textarea id="msg" name="message" className="form__input" cols="30" rows="10" placeholder="Your Message" required></textarea>
            <span className="input-error">please, insert your message.</span>
            <input type="submit" className="form__button" value="SUBMIT" />
            <span className="submit-response"><i className="far fa-check-circle"></i> Your e-mail was sent, thank you for your message!</span>
        </form>
    );
};

export {Formulary};