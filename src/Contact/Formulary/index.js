import React from "react";
import './Formulary.css';


function Formulary(){
    const [nameOk, setNameOk] = React.useState(false);
    const [mailOk, setMailOk] = React.useState(false);
    const [msgOk, setMsgOk] = React.useState(false);

    const nameHandler = (event)=>{
        let length = event.target.value.length;
        if(length >3 && length <50){ 
            setNameOk(true);
        } else {
            setNameOk(false);
        }
    }
    const emailHandler = (event)=>{
        let length = event.target.value.length;
        if(length > 3 && length < 50 && event.target.value.includes("@") && event.target.value.includes("."))
            setMailOk(true);
        else 
            setMailOk(false);
    }
    const msgHandler = (event)=>{
        console.log(event.target.value);
        if(event.target.value.includes(" ")){ 
                setMsgOk(true);
        } else {
            setMsgOk(false);
        }
    }

    return(
        <form className="flex-form card fade-bot">
            <input 
                type="text" 
                name="name" 
                className="form__input" 
                id="name" 
                placeholder="Your Name"
                required
                onChange= {nameHandler}/>
            <span 
                className={`input-condition ${nameOk && "checked"}`}
                >
                    <i className="far fa-check-circle"></i>between 4 and 50 characters long.
            </span>
            
            <input 
                type="email" 
                name="email" 
                className="form__input" 
                id="mail" 
                placeholder="Your e-mail" 
                required 
                onChange= {emailHandler}/>
            <span 
                className={`input-condition ${mailOk && "checked"}`}
                >
                    <i className="far fa-check-circle"></i> more than 4 characters, include "@" and "."
            </span>
            <textarea 
                id="msg" 
                name="message" 
                className="form__input" 
                cols="30" 
                rows="10" 
                placeholder="Your Message" 
                required 
                onChange= {msgHandler}></textarea>
            <span 
                className={`input-condition ${msgOk && "checked"}`}
                >
                    <i className="far fa-check-circle"></i> at least 2 words.
            </span>
            <input 
                type="submit" 
                className="form__button" 
                value="SUBMIT" />
            <span 
                className="submit-response">
                    <i className="far fa-check-circle"></i> Your e-mail was sent, thank you for your message!
            </span>
        </form>
    );
};

export {Formulary};