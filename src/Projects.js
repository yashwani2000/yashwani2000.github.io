import React from "react";
import './Projects.css'

export class Projects extends React.Component {

    render() {

        let projects = []

        let projs = {
            "projects": [{
                "title": "Curate",
                "desc": "Engineered a multiplayer iOS game for Amazon (CS-Capstone)",
                "long_desc": "Engineered a multiplayer iOS game for Amazon (CS-Capstone). Followed an agile development workflow over the semester with weekly code and design sprints. Leveraged SwiftUI, UIKit and GameKit.\nPosition: Team lead and Scrum Master",
                "color": "rgba(0, 100, 255, 0.25 )",
                "z": 0
            }, {
                "title": "AML - KMeans",
                "desc": "Designed a black-box attack that uses data poisoning to increase mis-classifications in a KMeans implementation",
                "long_desc": "Designed and implemented a black-box data poisoning exploit to increase mis-classifications in state-of-the-art (scikit-learn) KMeans Classifiers as capstone project for Matrix Methods in Machine Learning.\nPosition: Team lead",
                "color": "rgba(0, 0, 0, 0.25 )",
                "z": 0
            }, {
                "title": "Pinheads",
                "desc": "A project in decreasing training time for reinforcement learning agents by leveraging computer vision",
                "long_desc": "Used computer vision to extract a region of interest to decreases training parameters for an A2C reinforcement learning model to substantially reduce training time to achieve similar performance. Also tried to generalize the same model to work with different environment to get promising results.\nPosition: Team Lead\n\nURL: https://sites.google.com/wisc.edu/pinheads-cs-639/",
                "color": "rgba(211, 52, 96, 0.25 )",
                "z": 0
            }, {
                "title": "Leap Motion for Mobile Robot Control",
                "desc": "Engineered a hand tracked gesture based interface to control a mobile robot",
                "long_desc": "Engineered a hand tracked gesture based interface to control a mobile robot through ROS networking and LEAP Motion Controller in an interdisciplinary team of 3.\nPosition: Team Member\n\nURL: https://canvas.wisc.edu/files/23655894/download?download_frd=1&verifier=evYxraKEu8BLFt3DjwTqMPEIdeBOyIreKCESC57v/",
                "color": "rgba(96, 52, 211, 0.25 )",
                "z": 0
            }, {
                "title": "2048-AI",
                "desc": "Project in making a machine learning model to play the famous game 2048",
                "long_desc": "Designed and trained a neural network using the genetic algorithm to play the game 2048 in team of three.\nPosition: Team Lead",
                "color": "rgba(230, 196, 66, 0.25 )",
                "z": 0
            }, {
                "title": "Bend it like Beifong",
                "desc": "Emulated \"bending\" from Avatar the Last Airbender in VR (Unity)",
                "long_desc": "Created a VR experience in Unity to emulate \"bending\" from the TV Show Avatar the Last Airbender. Created our own physics mechanisms and object shaders to create fire, water and air bending in team of 4.\nPosition: Team member",
                "color": "rgba(0, 255, 255, 0.25 )",
                "z": 0
            }, {
                "title": "Variational Auto-Encoder",
                "desc": "Engineered a variational auto-encoder to generate hand-written digits",
                "long_desc": "Engineered a variational auto-encoder in TensorFlow to generate hand-written digits by training on the MNSIT dataset",
                "color": "rgba(255, 0, 0, 0.25 )",
                "z": 0
            }, {
                "title": "Badger Store",
                "desc": "A store developed in React that can be interacted with using a voice assistant/chat bot",
                "long_desc": "Developed a store in React which loads products using an API and uses DialogFlow interface a voice assistant/chat bot which can also be used to interact with the website",
                "color": "rgba(155, 0, 0, 0.25 )",
                "z": 0
            }, {
                "title": "Music Effects",
                "desc": "Music effects applied to audio in real-time",
                "long_desc": "Implemented multiple filters to add Echo, Flanging and Chorus effects in C with OpenMP parallelization and EDMA optimizations to achieve real-time results. Worked in a team of 2.\nPosition: Team Lead",
                "color": "rgba(0, 40, 104, 0.25 )",
                "z": 0
            }, {
                "title": "Milk Weights",
                "desc": "A JavaFX Application to analyze and generate reports on a large dataset from a dairy farm",
                "long_desc": "Designed and implemented a complete JavaFX application in a team of 5. Engineered a custom data structure similar to a segment tree to generate as many reports in constant time as possible.\nPosition: Team Lead",
                "color": "rgba(106, 13, 173, 0.25 )",
                "z": 0
            }, {
                "title": "GradeCloud",
                "desc": "Platform that assists teachers with auto-grading paper-based exams and assignments",
                "long_desc": "This project was built in 24 hours at the Dare Mighty Things Hackathon 2019 in McDonald's HQ in Chicago, IL. GradeCloud is a platform that assists teachers with grading paper-based exams and assignments by utilizing the powerful image recognition and processing APIs provided by Cloudinary to generate helpful insights for teachers. Ensuring minimum time is needed on grading complex problems, streamlining the traditional grading process.\nWon the Cloudinary award at Hackathon.\nPosition: Team Lead\n\nURL: https://github.com/pkgamma/gradecloud",
                "color": "rgba(210, 107, 57, 0.25 )",
                "z": 0
            }]
        }

        for (const proj of projs.projects) {
            projects.push(<ProjectCard key={proj.title} color={proj.color} title={proj.title}
                                       desc={proj.desc} longDesc={proj.long_desc}
                                       createModal={this.props.createModal}/>)
        }

        return (<>
            <div className={"projects_container container"}>
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
                <p>{this.props.desc}</p>
            </div>
        </>)
    }
}

