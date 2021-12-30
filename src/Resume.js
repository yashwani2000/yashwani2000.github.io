import React from "react";
import './Resume.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// TODO: Notion Logo
// TODO: Link to URL
// TODO: Download
// TODO: Maybe add button to toggle iframe

export default function Resume() {
    return (<>
        <div className={"resume_container container"} href={'https://google.com'}>
            <div className={"resume_tiles"}>
                <div className={"resume_tile"} style={{backgroundColor: "rgba(255, 0, 0, 0.2)"}}>
                        <span>
                            <FontAwesomeIcon icon={"file-pdf"} size="2x"/>
                            <h1>Download Latest PDF</h1>
                        </span>
                    <FontAwesomeIcon icon={"download"} size="2x"/>
                </div>
                <div className={"resume_tile"} style={{backgroundColor: "rgba(0, 0, 255, 0.2)"}}>
                        <span>
                            <FontAwesomeIcon icon={"globe"} size="2x"/>
                            <h1>View on Notion</h1>
                        </span>
                    <FontAwesomeIcon icon={"link"} size="2x"/>
                </div>

            </div>
        </div>
    </>);
}
