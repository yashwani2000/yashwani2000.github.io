import React from "react";
import './Contact.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class ContactCard extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.open(this.props.url)
    }

    render() {
        let logo;
        if (this.props.fa_b) {
            logo = <FontAwesomeIcon icon={this.props.logo} size="2x"/>
        } else {
            logo = <img src={this.props.logo} alt={"logo"}/>
        }
        return (<>
            <div className={"contact_card"} onClick={this.handleClick}
                 style={{backgroundColor: this.props.color, zIndex: this.props.z}}>
                {logo}
                <h2>{this.props.name}</h2>
                <p>{this.props.desc}</p>
            </div>
        </>)

    }
}

export class Contact extends React.Component {

    render() {
        let exps = {
            "experiences": [{
                "name": "LinkedIN",
                "desc": "in/yashwani2000",
                "logo": ["fab","linkedin-in"],
                "fa_b": true,
                "color": "rgba(40,103,178, 0.75 )",
                "z": 1,
                "url": "https://www.linkedin.com/in/yashwani2000/"
            }, {
                "name": "Email",
                "desc": "ywani@wisc.edu",
                "logo": "envelope",
                "fa_b": true,
                "color": "rgba(0,0,0, 0.75)",
                "z": 0,
                "url": "mailto:ywani@wisc.edu"
            }]
        }

        let cards = []

        for (const exp of exps.experiences) {
            cards.push(<ContactCard key={exp.name} fa_b={exp.fa_b} name={exp.name} desc={exp.desc} logo={exp.logo}
                                   color={exp.color} z={exp.z} url={exp.url}/>)
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
