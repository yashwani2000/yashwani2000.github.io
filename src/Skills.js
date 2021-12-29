import React from "react";
import './Skills.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export default function Skills() {

    let skills = {
        "skills": [{
            "name": "Python",
            "desc": "Pytorch, TensorFlow, numpy, numba, seaborn, skikit-Learn, matplotlib, gym, openai, opencv, stable_baselines3",
            "logo": ["fab", "python"],
            "fa_b": true,
            "color": "rgba(255,255,0,0.1)"
        }, {
            "name": "C/C++",
            "desc": "OpenMP, Intel oneAPI",
            "logo": ["fab", "java"],
            "fa_b": true,
            "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "Java", "desc": "", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "Matlab", "desc": "", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "JavaScript", "desc": "p5, three, a-frame", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "GLSL", "desc": "", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "WebGL", "desc": "", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "React", "desc": "", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        },{
            "name": "React Native", "desc": "", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        },{
            "name": "Swift", "desc": "SwiftUI, GameKit, UIKit, SpriteKit", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        },{
            "name": "Flutter", "desc": "", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        },{
            "name": "CSS", "desc": "", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        },{
            "name": "PHP", "desc": "", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        },{
            "name": "ROS", "desc": "", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        },{
            "name": "UE4", "desc": "", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        },{
            "name": "Unity", "desc": "Vuforia", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        },{
            "name": "Microsoft Office", "desc": "Macros", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        },{
            "name": "Adobe CC", "desc": "Photoshop, Illustrator, InDesign, Premier Pro", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        },{
            "name": "LT Spice", "desc": "", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        },{
            "name": "System Verilog", "desc": "", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        },]
    }
    let cards = []

    for (const skill of skills.skills) {
        cards.push(<SkillCard key={skill.name} fa_b={skill.fa_b} name={skill.name} desc={skill.desc} logo={skill.logo}
                              color={skill.color}/>)
    }

    return (<>
        <div className={"skills_container"}>
            <ul>
                {cards}
            </ul>
        </div>
    </>);
}

class SkillCard extends React.Component {
    render() {
        let logo;
        if (this.props.fa_b) {
            logo = <FontAwesomeIcon icon={this.props.logo} size="2x"/>
        } else {
            logo = <img src={this.props.logo} alt={"logo"}/>
        }
        return (<>
            <div className={"skill_card"} style={{backgroundColor: this.props.color}}>
                <span>
                    {logo}
                    <h1>{this.props.name}</h1>
                </span>
                <p>{this.props.desc}</p>
            </div>
        </>)
    }
}

