import React from "react";
import './Resume.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class ResumeCard extends React.Component {

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
            <div className={"resume_card"} onClick={this.handleClick}
                 style={{backgroundColor: this.props.color, zIndex: this.props.z}}>
                {logo}
                <h2 style={{color: this.props.tcolor}}>{this.props.name}</h2>
                <p>{this.props.desc}</p>
            </div>
        </>)

    }
}

export class Resume extends React.Component {

    render() {
        let exps = {
            "experiences": [{
                "name": "Rezi",
                "desc": "View on Rezi",
                "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUtPlBJybAWoIZKzbMsMkpDuKNBp5gqMUdJyrAsNkwtPE8vSlc/opVHwasyYWZDsZ8gp4wtOU5Drp0vNUwXmoIvS1c8kohJ0bU6i4MzZWgpW18ejnwpKUU9mI1DxaszYWctRFM5u6IssJYnrJE1mYwmmIYzW2Iej3wpJ0Mif3Qopo+7emzxAAAGaklEQVR4nO2dW3ubOBBAkeWLRGwMaWLWbewEe3e77f//gSsBsU1iQCOCRqhzHvqWVOcbzYwuQKKIIAiCIAiCIAiCIAiCIAiCIIg/mtjRzxAjkkkQWSYz7CHDkMkaxN8/1onEHjQEmXAYp5ng+wkpZglnMNLZkWnFiVQbuYcKHmfKkImpTFS5F0KNWgAMi8qQTWOiyldgABWn0pAJ8ToBRfgUVWZpZchULq6wBfqQrxwyPStUGtaGgr96Xm5UDoL9yjSsDZWj37kok2qUMEF+vsbQ83IjE5sIMjG7iaEqN74qxnolA46f5tgwVDFNPM3FLBE2flUa3hoyTxdwcl/OMbhgmYY3s5R5Wm7KHLQKIZt9jKFaE/m3gLNp9DXHT4asav1e5aJu9HYBLJdsnw0Z92sBp3PQVpCndw0Z23u067dr9Kz+odlnQzUfvMpF1QdtA6hkjk8tMaxbvwfZOKDIaE53YlgrepKLlku1C2mroSe7/qrR21P1ijuGQvix618lZYWxD2PRZliTfMMVHJiD7JKGbYYi32tFtHJju5u4MUi7DHXTQC03djv6Bu9p2DpLFXi5KF9LQevlmqYwMERr/RJ8sv0ZfjIwxDrwV0Vm8By9pmFnDHG2xEP7YMUlDTsNBcbZTbbvaYPC6M6pmKUVnbNU/+NaMf6e9vDPv0k/++8XNj1TXjjeTM0XxXnWyY95DGG+6RZkYjN3bKjq6PGUdhjCVluy13Dh2rD+j4s2y+kbXtPmWJwCNqz+5TqWgRrecmwUn58BGjYtQ4xhPZK6+IRrqOGq+PyEDWhihlpyGb4h7JEDMiTDL4cMv96QP7p9lsi5Id8+uD0zdW3IF2+ObxMdG/JN7PrU260hX0jnx/pODfl2JIsuXBryxzeEixmHhnyBcvPkzpAv5ihXa84M+RbpmRNXhnyLkYMaR4aqyGA9NuTGkG9VHww3hkIJ4hSZEhcx5I+Yj0M5MNSNHlFxfEO1VEPLQc3ohnz7ghnBsQ0Fyx3v6D8zcgz5Ev2hy3ENPRAc15BvV+iCYxoK/vgy0qghjGiYL/EDGI1nqJZq6wi3TdSMFsN8mfngN5qhyJcvfgh+veG30pCvsRv9hXFiyNdepGDJCIaqyCz9ERwlhvnSg0Z/wegeHzJeucnX/402XAtMYgjZ3sWSrdHfHWlgYCifHyAcPOmD75gYbthxYw7bedMoSgwMX9425s/yCyHygw8L7gsmeZg9L0Bv1PCDT1E06hZKEfC+gmD5zqNiY9YPs+e+59Ob+KRo2PEzSC7qn9p5k4uma5p3RdNQcm/KjfGqrSo35qiJ6kdfNF+XVrlono6+KAJW3mqigt7fy/1o/ZC9hVY0F1RNQ+Ui6pVFCWj3BM7Fg9vHEO8C2x9qRfMwqq3wDn8ZDtwBZw+w1s/xWz/IMIbmoi432H0RfIph0/ondn84tdZvcRKlWj9QEbXcwA1ji1zEbP1Wp4k6FyFNIz8gnr7ZnZfCWz/eCarliTBMsdz1Yx2D2555lzsNQDbi7fqtT/Un0/rt7y3K1g+QrHb97qfqgJuZMhchijgTdcjdk8pFcz9Wtv5pxbDORVC5QdgvDrs/BB8yIpzADbwhzR4+9sXOXycQdv1D74AtWr8rtZrBt9x6pyFu6JN0rjj8Hj+OGhekb0/dn7uZpb9cf4Fn+JMKjQ6QdRueCzb194A7DM+F7p+Tf9O5xTA9FfUnsoI0VHbX/yU4w7OK3aWfiNAMz8W9T+6GYpiejvfXN5M3jJ/qstK2s5q8Yfb7NvFCNJR9u43JG64W3b9v+oay98uQkzcMPoZz/wx7BgQ3DH2WkqFzQ7nLv9qw+/c5N4zmf3UrTj6GKordigEYRqvOiRqCYTQ/dNywBGEYzTuiCF+X+mgYrdpzERzDrWd7i5r2cgM39DKGeqK2vFIRjKEqN/ejGI5hW+sPyLAlF0MyrFr/x/EFZVi2/qBjeG39N4MMzPBO6w+l419Q5aYZA7Dho+eGOhcbiuEZRi/NZXiAhh9af4iGzdYfpKFq/ddRhmlY7TSCNrzZ9YdqeG39wRpeyk24hu/LcPBJ1HIyhnUuhmxYtX7wLJ2SYZmL0L8VNC1D3foDN9QncF89S7lfhtHqsAX+RavdtgfPviMVxXvgSyBy1YNvghHW1+L9pS/k6J8gGB38L2UQBEEQBEEQBEEQBEEQBEEQBDEy/wPezo0UV4VW1wAAAABJRU5ErkJggg==",
                "fa_b": false,
                "color": "rgba(40, 54, 70, 1)",
                "z": 0,
                "url": "https://app.rezi.ai/s/jU0VM7W63BfaodPWW6SK",
                "tcolor": "rgba(255, 255, 255, 1)"
            }]
        }

        let cards = []

        for (const exp of exps.experiences) {
            cards.push(<ResumeCard key={exp.name} fa_b={exp.fa_b} name={exp.name} desc={exp.desc} logo={exp.logo}
                                   color={exp.color} z={exp.z} url={exp.url} tcolor={exp.tcolor}/>)
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
