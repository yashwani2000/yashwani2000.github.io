import React from "react";
import './Projects.css'

export class Projects extends React.Component {

    render() {
        let projects = []

        let projs = {
            "projects": [{
                "title": "Curate",
                "desc": "Engineered a multiplayer iOS game for Amazon",
                "long_desc": "chalkboard-teacher",
                "color": "rgba(255, 255, 255, 0.1 )",
                "z": 0
            }, {
                "title": "Adversarial Machine Learning for KMeans",
                "desc": "Designed a black-box attack that uses data poisoning to increase mis-classifications in a KMeans implementation",
                "long_desc": "chalkboard-teacher",
                "color": "rgba(255, 255, 255, 0.1 )",
                "z": 0
            },]
        }

        for (const proj of projs.projects) {
            projects.push(<ProjectCard key={proj.title} color={proj.color} title={proj.title}
                                       desc={proj.desc} longDesc={proj.long_desc}
                                       createModal={this.props.createModal}/>)
        }

        return (<>
            <div className={"projects_container"}>
                <ul>
                    {projects}
                </ul>
            </div>
        </>);
    }
}

class ProjectCard extends React.Component {

    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
    }

    showModal() {
        this.props.createModal(this.props.title, this.props.longDesc)
    }

    render() {
        return (<>
            <div className={"project_card"} style={{backgroundColor: this.props.color}} onClick={this.showModal}>
                <h1>{this.props.title}</h1>
                <p>{this.props.desc} </p>
            </div>
        </>)
    }
}

