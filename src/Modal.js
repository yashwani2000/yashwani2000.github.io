import React from "react";
import './Modal.css'

export class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.close();
        }
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (<>
            <div className={"modal"}>
                <div className={"modal_body"} ref={this.setWrapperRef}>
                    <div className={"modal_content"}>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
            </div>
        </>);
    }
}

