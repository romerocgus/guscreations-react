import React from 'react';
import {Header} from "../Header";
import {Navbar} from "../Navbar";
import {About} from "../About";
import {Biography} from "../Biography";
import {Skills} from "../Skills";
import {SoftSkills} from "../SoftSkills";
import {Projects} from "../Projects";
import {Contact} from "../Contact";
import {Footer} from "../Footer";
import {useObserver} from "../useObserver";

function App() {

	const ref = React.useRef(null);
	const [observed] = useObserver(ref);

    return (
        <React.Fragment>
			<Header />
			<Navbar />
			<About>
				<h2 className={`subtitle fade-left ${observed ? "appear" : ""}`} ref= {ref}>About me</h2>
				<Biography />
				<Skills />
				<SoftSkills />
			</About>
			<Projects />
			<Contact />
			<Footer />
			
        </React.Fragment>
    );
}

export default App;
