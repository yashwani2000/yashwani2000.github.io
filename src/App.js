import './App.css';
import React from "react";
import Background from "./Background";
import {HashRouter as Router, Route, Switch, Link} from "react-router-dom";
import {Projects} from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import Home from "./Home";
import {Work} from "./Work";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab, faPython} from '@fortawesome/free-brands-svg-icons'
import {
    faLock, faChalkboardTeacher, faPizzaSlice, faBolt, faHome, faTerminal, faFilePdf, faDownload, faGlobe, faLink, faRobot, faMicrochip, faChargingStation
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Modal} from "./Modal";

library.add(fab, faLock, faChalkboardTeacher, faPizzaSlice, faBolt, faPython, faHome, faTerminal, faFilePdf, faDownload, faGlobe, faLink, faRobot, faMicrochip,faChargingStation)

// TODO: add JSON integration
// TODO: enable Modals in Projects and Work

export default class App extends React.Component {

    render() {
        let three = false;
        if (three) {
            return (<Background/>)
        } else {
            return (<>
                <Background/>
                <Base/>
            </>);
        }
    }
}

class Base extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false, modalTitle: "", modalDesc: ""
        }
        this.createModal = this.createModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    closeModal() {
        this.setState({
            showModal: false
        })
    }

    createModal(title, desc) {
        this.setState({
            showModal: true, modalTitle: title, modalDesc: desc
        })
    }


    render() {
        return (<>
            <div className={"base"}>
                <Router basename={process.env.PUBLIC_URL}>
                    <header>
                        <ul>
                            <li><Link to="/"><FontAwesomeIcon icon={"home"} size="1x"/></Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/work">Work</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/resume">Résume</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </header>
                    <Switch>
                        <Route path="/projects" render={() => <Projects createModal={this.createModal}/>}/>
                        <Route path="/work" render={() => <Work createModal={this.createModal}/>}/>
                        <Route path="/skills" component={Skills}/>
                        <Route path="/resume" component={Resume}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </Router>
                <Modal show={this.state.showModal} title={this.state.modalTitle} desc={this.state.modalDesc}
                       close={this.closeModal}/>
            </div>
        </>)
    }

}