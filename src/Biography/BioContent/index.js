import React from "react";
import photo from "../../Images/myPhoto.jpg";
import './BioContent.css';

function BioContent({ page }){

    const pageText = (pag)=>{
        if(pag === 0)
            return (
                <p className="bio__text">I started my career with the dream of give to the world the most unique experiences in every project that i contribute to make. I really enjoy develop, design and experiment with
                    <span className="colors"> colors</span>, 
                    <span className="fonts"> fonts</span>, 
                    <span className="colors"> animations </span> 
                and every component that makes a difference to give me the posibility of bring to life UIs that people will love to use!
                </p>
            )
        if(pag ===1)
            return (
                <p className="bio__text">
                    I'm naturally curious, love to learn new skills and create awesome projects where i can share innovative (or crazy) ideas and put them into action. I'm constantly challenging myself to improve, looking for creative solutions in every aspect of my life.
                </p>
            )
        if(pag===2)
            return (
                <p className="bio__text">
                    Well... That's a little bit of me, now i like to know more about you. If you want to talk, being for work, some insight, cool ideas or whatever, please send me a message in my
                    <a className="contact-link" href="#Contact"> contact section</a> or 
                    <a className="contact-link" href="#footer"> follow me</a> and we'll be friends!. i'll love to read what you have to say.
                    <br />
                    Hope you enjoy my site as much as i did making it!
                    <br />
                    Gus
                </p>
            )
    }

    return(
        <section className= "bio__content">
            <img className="bio__content-img" src= {photo} alt="Me" />
            <h3 className="content-header__title">Hello Everyone, nice to meet you!</h3>
            <p className="content-header__text">I'm Gustavo Romero Cañas, a front-end web developer passionate about the beauty of the little details.</p>
            {pageText(page)}
        </section>
    )
};

export {BioContent};