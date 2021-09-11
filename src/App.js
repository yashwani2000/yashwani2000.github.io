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
import logo from "./face3.png";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faLock} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faLock)

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
                <div className={"container"}>
                    <Router basename={process.env.PUBLIC_URL}>
                        <header>
                            <Link to="/"> <img className={"logo"} src={logo} alt={"Logo"}/></Link>
                            <ul>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/work">Work</Link></li>
                                <li><Link to="/skills">Skills</Link></li>
                                <li><Link to="/resume">Résume</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </header>
                        <Switch>
                            <Route path="/projects" component={Projects}/>
                            <Route path="/work" component={Work}/>
                            <Route path="/skills" component={Skills}/>
                            <Route path="/resume" component={Resume}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/" component={Home}/>
                        </Switch>
                    </Router>
                </div>
            </section>
        );
    }
}