import React from "react";
import './Formulary.css';


function Formulary(){
    const [nameOk, setNameOk] = React.useState("");
    const [mailOk, setMailOk] = React.useState("");
    const [msgOk, setMsgOk] = React.useState("");
    const [sent, setSent] = React.useState("");


    const nameHandler = (event)=>{
        let length = event.target.value.length;
        let textValue= event.target.value;
        if(length >3 && length <50){ 
            setNameOk(textValue);
        } else {
            setNameOk("");
        }
    }
    const emailHandler = (event)=>{
        let length = event.target.value.length;
        let textValue= event.target.value;
        if(length > 3 && length < 50 && event.target.value.includes("@") && event.target.value.includes("."))
            setMailOk(textValue);
        else 
            setMailOk("");
    }
    const msgHandler = (event)=>{
        let textValue= event.target.value;
        console.log(event.target.value);
        if(event.target.value.includes(" ")){ 
                setMsgOk(textValue);
        } else {
            setMsgOk("");
        }
    }

    const formSubmit = (event)=>{
        event.preventDefault();
        if(nameOk && mailOk && msgOk){

            fetch("https://formsubmit.co/ajax/info@guscreations.net",{
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: "FormSubmit",
                message: `Name: ${nameOk}
                Email: ${mailOk}
                Message: ${msgOk}`
            })
            })
            .then(response => response.json())
            .then(json => {
                setSent("sent");
                document.getElementById("form").reset();
                setNameOk("");
                setMailOk("");
                setMsgOk("");
            })
            }else {
                setSent("unSent")
            };
    }
    return(
        <form id="form" className="flex-form card fade-bot" onSubmit={formSubmit}>
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
                className={`submit-response ${sent === "sent" ? "sent" : (sent === "unSent" ? "unSent" : "")}`}>
                    <i className="far fa-check-circle"></i> {sent === "sent" ? "Your e-mail was sent, thank you for your message!" : "Please, make sure your message is ok"}
            </span>
        </form>
    );
};

export {Formulary};