import React from "react";
import './Projects.css'

export class Projects extends React.Component {

    render() {
        // TODO: add projects
        let projects = []
        for (let i = 0; i < 5; i++) {
            projects.push(<ProjectCard color={"rgba(0,0,0,0.1)"} title={"Adversarial Machine Learning for KMeans"}
                                       desc={"Performs a black box attack on KMeans models."} longDesc={"LongDesc"}
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

