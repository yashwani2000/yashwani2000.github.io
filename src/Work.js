import React from "react";
import './Work.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import wipi_logo from './wipi.png'


class WorkCard extends React.Component {

    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
    }

    showModal() {
        this.props.createModal(this.props.name, this.props.longDesc)
    }

    render() {
        let logo;
        if (this.props.fa_b) {
            logo = <FontAwesomeIcon icon={this.props.logo} size="2x"/>
        } else {
            logo = <img src={this.props.logo} alt={"logo"}/>
        }
        return (<>
            <div className={"work_card"} style={{backgroundColor: this.props.color, zIndex: this.props.z}}
                 onClick={this.showModal}>
                {logo}
                <h2>{this.props.name}</h2>
                <p>{this.props.desc}</p>
            </div>
        </>)
    }
}

export class Work extends React.Component {

    render() {
        let exps = {
            "experiences": [{
                "name": "Peer Mentor",
                "desc": "Computer Graphics (CS 559)",
                "longDesc": "Test1",
                "logo": "chalkboard-teacher",
                "fa_b": true,
                "color": "rgba(255, 255, 255, 0.1 )",
                "z": 0
            }, {
                "name": "Techincal Student Staff",
                "desc": "UW-Makerspace",
                "longDesc": "Test1",
                "logo": "https://making.engr.wisc.edu/wp-content/uploads/sites/1271/2020/02/favicon_red.png",
                "fa_b": false,
                "color": "rgba(210, 27, 23, 0.1 )",
                "z": 1
            }, {
                "name": "Undergraduate Researcher",
                "desc": "Wisconsin Privacy and Security Group",
                "longDesc": "Test1",
                "logo": wipi_logo,
                "fa_b": false,
                "color": "rgba(0, 0, 0, 0.05 )",
                "z": 2
            }, {
                "name": "Software Engineering Intern",
                "desc": "Crave Eats",
                "longDesc": "Test1",
                "logo": "pizza-slice",
                "fa_b": true,
                "color": "rgba(0, 255, 0, 0.1 )",
                "z": 3
            }, {
                "name": "Undergraduate Student Assistant",
                "desc": "Electrical and Electronic Circuits (ECE 376)",
                "longDesc": "Test1",
                "logo": "bolt",
                "fa_b": true,
                "color": "rgba(0, 0, 255, 0.1 )",
                "z": 4
            },]
        }

        let cards = []

        for (const exp of exps.experiences) {
            cards.push(<WorkCard key={exp.name} fa_b={exp.fa_b} name={exp.name} desc={exp.desc} logo={exp.logo}
                                 color={exp.color} z={exp.z} createModal={this.props.createModal}
                                 longDesc={exp.longDesc}/>)
        }

        return (<>
            <div className={"work_container container"}>
                <div className={"work_cards"}>
                    {cards}
                </div>
            </div>
        </>);

    }
}
