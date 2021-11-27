import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Skills.css'

class SkillsCard extends React.Component {
    render() {
        let logo;
        if (this.props.fa_b) {
            logo = <FontAwesomeIcon icon={this.props.logo} size="2x"/>
        } else {
            logo = <img src={this.props.logo} alt={"logo"}/>
        }
        return (
            <>
                <div className={"scard"} style={{backgroundColor: this.props.color}}>
                    {logo}
                    <h2>{this.props.name}</h2>
                </div>
            </>
        )
    }
}


export default function Skills() {
    let skills = {
        "skills": [
            {
                "name": "Python",
                "logo": "python",
                "fa_b": true,
                "color": "rgba(255, 255, 255, 0.1 )",
            },
            {
                "name": "Swift",
                "logo": "python",
                "fa_b": true,
                "color": "rgba(255, 255, 255, 0.1 )",
            },
            {
                "name": "React",
                "logo": "python",
                "fa_b": true,
                "color": "rgba(255, 255, 255, 0.1 )",
            },
            {
                "name": "Java",
                "logo": "python",
                "fa_b": true,
                "color": "rgba(255, 255, 255, 0.1 )",
            },
            {
                "name": "Python",
                "logo": "python",
                "fa_b": true,
                "color": "rgba(255, 255, 255, 0.1 )",
            },
        ]
    }
    let cards = []

    for (const skill of skills.skills) {
        cards.push(
            <SkillsCard key={skill.name} fa_b={skill.fa_b} name={skill.name} logo={skill.logo}
                        color={skill.color}/>
        )
    }


    return (
        <>
            <div className={"scontent"}>
                <div className={"scards"}>
                    {cards}
                </div>
            </div>
        </>
    );
}
