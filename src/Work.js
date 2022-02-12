import React from "react";
import './Work.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import wipi_logo from './wipi.png'


class WorkCard extends React.Component {

    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
    }

    showModal() {
        this.props.createModal(this.props.name, this.props.longDesc)
    }

    render() {
        let logo;
        if (this.props.fa_b) {
            logo = <FontAwesomeIcon icon={this.props.logo} size="2x"/>
        } else {
            logo = <img src={this.props.logo} alt={"logo"}/>
        }
        return (<>
            <div className={"work_card"} style={{backgroundColor: this.props.color, zIndex: this.props.z}}
                 onClick={this.showModal}>
                {logo}
                <h2>{this.props.name}</h2>
                <p>{this.props.desc}</p>
            </div>
        </>)
    }
}

export class Work extends React.Component {

    render() {
        let exps = {
            "experiences": [{
                "name": "Peer Mentor",
                "desc": "Computer Graphics (CS 559)",
                "longDesc": "Helped students in CS 559 with calculus, linear algebra, and debugging programming assignments. Also developed auto-grading tools and demos using JavaScript and Three.js in a team of 6.",
                "logo": "chalkboard-teacher",
                "fa_b": true,
                "color": "rgba(255, 255, 255, 0.1 )",
                "z": 0
            }, {
                "name": "Techincal Student Staff",
                "desc": "UW-Makerspace",
                "longDesc": "Mentoring students by reviewing, critiquing, debugging, and prototyping their project designs mostly involving IoT and microcontrollers (65+ teams so far)." + " Worked on multiple projects utilizing GraphQL and monday.com, CV in MATLAB, Arduino controlled PID sensor, and a React app utilizing the Deputy API." + "Organized workshops like Intro to Arduino with MATLAB, Intro to Arduino, Intro to Sculpting in Medium and Autodesk Maya, Intro to Unreal Engine, Make your own Arduino.\nCurrent titles: Microcontroller Chair & AR/VR Chair\nURL: https://making.engr.wisc.edu",
                "logo": "https://making.engr.wisc.edu/wp-content/uploads/sites/1271/2020/02/favicon_red.png",
                "fa_b": false,
                "color": "rgba(210, 27, 23, 0.1 )",
                "z": 1
            }, {
                "name": "Undergraduate Researcher",
                "desc": "Wisconsin Privacy and Security Group",
                "longDesc": "Developed a hardware hack, under Professor Kassem Fawaz, with 3D-printable tubes to deceive voice authentication models. Designed experiments to verify attenuation and addition of fundamental frequencies when sound passes through parallel and sequential tubes. Analyzed the collected data by running it through a trained Neural Network in PyTorch to increase mis-classifications. Read our paper at -\nURL: http://arxiv.org/abs/2202.02751",
                "logo": wipi_logo,
                "fa_b": false,
                "color": "rgba(0, 0, 0, 0.05 )",
                "z": 2
            }, {
                "name": "Software Engineering Intern",
                "desc": "Crave Eats",
                "longDesc": "Developing a native iOS and Android app using the Flutter SDK and Google's Firebase." +
                    "Involves developing algorithmic solutions for the backend of the app, " +
                    "engineering a ML recommendation system based on user preferences to enhance user experience." +
                    "• Collaborating in an agile manner with cross-functional team sprints, participated in 100% of weekly scrums to meet production deadlines.",
                "logo": "pizza-slice",
                "fa_b": true,
                "color": "rgba(0, 255, 0, 0.1 )",
                "z": 3
            }, {
                "name": "Undergraduate Student Assistant",
                "desc": "Electrical and Electronic Circuits (ECE 376)",
                "longDesc": "Helped Professor Joseph Andrews for the course ECE 376 - Electrical & Electronic Circuits." +
                    "Tutored undergraduate students in circuit fundamentals, like AC and DC analysis, during active learning sessions.",
                "logo": "bolt",
                "fa_b": true,
                "color": "rgba(0, 0, 255, 0.1 )",
                "z": 4
            },  {
                "name": "Workflow Consultant",
                "desc": "Technical Publications",
                "longDesc": "Helped change their traditional ways by automating a lot of their tasks and digitizing everything using various tools like monday.com and making custom integrations using Integromat, IFTTT, and custom functions in Microsoft Excel tailored for the business." +
                    "Currently with the company to make its operations completely paperless till production.\n\nProvided user requirements analysis, design, and programming support to enhance website development using HTML and React." +
                    " Support maintenance programming development for their upcoming web pages and web applications." +
                    " Researched new web technologies, including software and hardware developments and recommended purchases and changes in design, software, and hardware.",
                "logo": "https://technicalpublications.org/content/images/thumbs/0000373.png",
                "fa_b": false,
                "color": "rgba(255, 0, 0, 0.1 )",
                "z": 4
            },]
        }

        let cards = []

        for (const exp of exps.experiences) {
            cards.push(<WorkCard key={exp.name} fa_b={exp.fa_b} name={exp.name} desc={exp.desc} logo={exp.logo}
                                 color={exp.color} z={exp.z} createModal={this.props.createModal}
                                 longDesc={exp.longDesc}/>)
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
