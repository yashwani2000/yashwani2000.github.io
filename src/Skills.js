import React from "react";
import './Skills.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


class SkillsCard extends React.Component {
    render() {
        let logo;
        if (this.props.fa_b) {
            logo = <FontAwesomeIcon icon={this.props.logo} size="2x"/>
        } else {
            logo = <img src={this.props.logo} alt={"logo"}/>
        }
        return (<>
            <div className={"skills-card"} style={{gridRow: this.props.span}}>
                {logo}
                <h2>{this.props.name}</h2>
                <p>{this.props.desc}</p>
            </div>
        </>)
    }
}

export default function Skills() {

    let skills = {
        "skills": [{
            "name": "Python",
            "desc": "[]",
            "logo": ["fab", "python"],
            "fa_b": true,
            "span": "span 1"
        },{
            "name": "Java",
            "desc": "[]",
            "logo": ["fab", "java"],
            "fa_b": true,
            "span": "span 3"
        },{
            "name": "Java",
            "desc": "[]",
            "logo": ["fab", "java"],
            "fa_b": true,
            "span": "span 3"
        },{
            "name": "Java",
            "desc": "[]",
            "logo": ["fab", "java"],
            "fa_b": true,
            "span": "span 3"
        },{
            "name": "Java",
            "desc": "[]",
            "logo": ["fab", "java"],
            "fa_b": true,
            "span": "span 3"
        },{
            "name": "Java",
            "desc": "[]",
            "logo": ["fab", "java"],
            "fa_b": true,
            "span": "span 3"
        },{
            "name": "Java",
            "desc": "[]",
            "logo": ["fab", "java"],
            "fa_b": true,
            "span": "span 3"
        },{
            "name": "Java",
            "desc": "[]",
            "logo": ["fab", "java"],
            "fa_b": true,
            "span": "span 3"
        },{
            "name": "Java",
            "desc": "[]",
            "logo": ["fab", "java"],
            "fa_b": true,
            "span": "span 3"
        },]
    }
    let cards = []

    for (const skill of skills.skills) {
        cards.push(<SkillsCard key={skill.name} fa_b={skill.fa_b} name={skill.name} desc={skill.desc} logo={skill.logo}
                               span={skill.span}/>)
    }

    return (<>
        <div className={"skills-container"}>
            <div className={"skills-content"}>
                <div className={"skills-cards"}>
                    {cards}
                </div>
            </div>
        </div>
    </>);
}
