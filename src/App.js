import './App.css';
import {React} from "react";
import Background from "./Background";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./Work";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab, faPython} from '@fortawesome/free-brands-svg-icons'
import {faLock, faChalkboardTeacher, faPizzaSlice, faBolt, faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(fab, faLock, faChalkboardTeacher, faPizzaSlice, faBolt, faPython, faHome)

export default function App() {
    let three = false;
    if (three) {
        return (
            <section>
                <Background/>
            </section>
        )
    } else {
        return (
            <section>
                <Background/>
                <Router basename={process.env.PUBLIC_URL}>
                    <div className={"base-container"}>
                        <header>
                            <ul>
                                <li><Link to="/"><FontAwesomeIcon icon={"home"} size="1.5x"/></Link></li>
                            </ul>
                            <ul>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/work">Work</Link></li>
                                <li><Link to="/skills">Skills</Link></li>
                                <li><Link to="/resume">Résume</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </header>
                    </div>
                    <Switch>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/work" component={Work}/>
                        <Route path="/skills" component={Skills}/>
                        <Route path="/resume" component={Resume}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </Router>
            </section>
        );
    }
}