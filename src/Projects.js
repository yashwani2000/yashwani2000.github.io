import React from "react";
import './Projects.css'

export default function Projects() {

    // TODO: add projects
    let projects = []
    for (let i = 0; i < 50; i++) {
        projects.push(<ProjectCard color={"rgba(0,0,0,0.1)"} title={"Adversarial Machine Learning for KMeans"}
                                   desc={"Performs a black box attack on KMeans models adn jndak bc as wek  sd has hnish xndijn xnudnjnhuxi xdwinhunxbhunwdx nxuwijy"}/>)
    }


    return (<>
        <div className={"projects_container"}>
            <ul>
                {projects}
            </ul>
        </div>
    </>);
}

class ProjectCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    showModal () {
        this.setState({
            show: true
        })
    }

    render() {
        return (<>
            <div className={"project_card"} style={{backgroundColor: this.props.color}} onClick={this.showModal}>
                <h1>{this.props.title}</h1>
                <p>{this.props.desc}  </p>
            </div>
            <Modal/>
        </>)
    }
}

class Modal extends React.Component {
    render() {
        return (<>

            </>
        );
    }
}
