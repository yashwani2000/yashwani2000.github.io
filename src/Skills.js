import React from "react";
import './Skills.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// TODO: Find apt logos
// TODO: Add all skills

export default function Skills() {

    let skills = {
        "skills": [{
            "name": "Python",
            "desc": "Pytorch, TensorFlow, numpy, numba, seaborn, skikit-Learn, matplotlib, gym, openai, opencv, stable_baselines3",
            "logo": ["fab", "python"],
            "fa_b": true,
            "color": "rgba(0,0,0,0.1)"
        }, {
            "name": "C/C++",
            "desc": "OpenMP, Intel oneAPI",
            "logo": "https://icons-for-free.com/iconfiles/png/512/bxl+c+plus+plus-1325051931431540241.png",
            "fa_b": false,
            "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "Java", "desc": "", "logo": ["fab", "java"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "Matlab", "desc": "", "logo": "https://pic.onlinewebfonts.com/svg/img_437041.png", "fa_b": false, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "JavaScript",
            "desc": "p5, three, a-frame",
            "logo": ["fab", "js-square"],
            "fa_b": true,
            "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "WebGL", "desc": "", "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/WebGL_Logo.svg/2560px-WebGL_Logo.svg.png", "fa_b": false, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "React", "desc": "", "logo": ["fab", "react"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "React Native", "desc": "", "logo": ["fab", "react"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "Swift",
            "desc": "SwiftUI, GameKit, UIKit, SpriteKit",
            "logo": ["fab", "swift"],
            "fa_b": true,
            "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "Flutter", "desc": "", "logo": "https://iconape.com/wp-content/png_logo_vector/flutter-logo.png", "fa_b": false, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "CSS", "desc": "", "logo": ["fab", "css3-alt"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "PHP", "desc": "", "logo": ["fab", "php"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "ROS", "desc": "", "logo": ["fas", "robot"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "UE4", "desc": "", "logo": "https://cdn.icon-icons.com/icons2/2389/PNG/512/unreal_engine_logo_icon_144771.png", "fa_b": false, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "Unity", "desc": "Vuforia", "logo": ["fab", "unity"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "MS Office",
            "desc": "Macros",
            "logo": ["fab", "microsoft"],
            "fa_b": true,
            "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "Adobe CC",
            "desc": "Photoshop, Illustrator, InDesign, Premier Pro",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Creative_Cloud.svg",
            "fa_b": false,
            "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "LT Spice", "desc": "", "logo": ["fas", "charging-station"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        }, {
            "name": "System Verilog", "desc": "", "logo": ["fas", "microchip"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        },{
            "name": "zsh", "desc": "", "logo": ["fas", "terminal"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        },{
            "name": "Docker", "desc": "", "logo": ["fab", "docker"], "fa_b": true, "color": "rgba(0,0,0,0.2)"
        },]
    }
    let cards = []

    for (const skill of skills.skills) {
        cards.push(<SkillCard key={skill.name} fa_b={skill.fa_b} name={skill.name} desc={skill.desc} logo={skill.logo}
                              color={skill.color}/>)
    }

    return (<>
        <div className={"skills_container container"}>
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

