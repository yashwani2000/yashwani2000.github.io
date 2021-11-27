import React from "react";
import './Work.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import wipi_logo from './wipi.png'


class WorkCard extends React.Component {
    render() {
        let logo;
        if (this.props.fa_b) {
            logo = <FontAwesomeIcon icon={this.props.logo} size="2x"/>
        } else {
            logo = <img src={this.props.logo} alt={"logo"}/>
        }
        return (
            <>
                <div className={"card"} style={{backgroundColor: this.props.color, zIndex: this.props.z}}>
                    {logo}
                    <h2>{this.props.name}</h2>
                    <p>{this.props.desc}</p>
                </div>
            </>
        )
    }
}

export default function Work() {

    let exps = {
        "experiences": [
            {
                "name": "Peer Mentor",
                "desc": "Computer Graphics (CS 559)",
                "logo": "chalkboard-teacher",
                "fa_b": true,
                "color": "rgba(255, 255, 255, 0.1 )",
                "z": 0
            },
            {
                "name": "Techincal Student Staff",
                "desc": "UW-Makerspace",
                "logo": "https://making.engr.wisc.edu/wp-content/uploads/sites/1271/2020/02/favicon_red.png",
                "fa_b": false,
                "color": "rgba(210, 27, 23, 0.1 )",
                "z": 1
            },
            {
                "name": "Undergraduate Researcher",
                "desc": "Wisconsin Privacy and Security Group",
                "logo": wipi_logo,
                "fa_b": false,
                "color": "rgba(0, 0, 0, 0.05 )",
                "z": 2
            },
            {
                "name": "Software Engineering Intern",
                "desc": "Crave Eats",
                "logo": "pizza-slice",
                "fa_b": true,
                "color": "rgba(0, 255, 0, 0.1 )",
                "z": 1
            },
            {
                "name": "Undergraduate Student Assistant",
                "desc": "Electrical and Electronic Circuits (ECE 376)",
                "logo": "bolt",
                "fa_b": true,
                "color": "rgba(0, 0, 255, 0.1 )",
                "z": 0
            },
        ]
    }
    let cards = []

    for (const exp of exps.experiences) {
        cards.push(
            <WorkCard key={exp.name} fa_b={exp.fa_b} name={exp.name} desc={exp.desc} logo={exp.logo}
                      color={exp.color} z={exp.z}/>
        )
    }

    return (
        <>
            <div className={"work-container"}>
                <div className={"wcontent"}>
                    <div className={"cards"}>
                        {cards}
                    </div>
                </div>
            </div>
        </>
    );
}
