import React from "react";
import './Home.css'
import face from "./face1.png";
import TypeWriterEffect from 'react-typewriter-effect';

export default function Home() {

    return (
        <>
            <div className={"content"}>
                <h2>Hi, I'm Yash</h2>
                <TypeWriterEffect
                    multiText={["Student", "Electrical Engineer", "Computer Scientist", "Undergraduate Researcher", "Intern", ""]}
                    hideCursorAfterText={true} cursorColor={"white"} typeSpeed={50}/>
                <p> Currently a student at the University of Wisconsin Madison, double majoring in Electrical
                    Engineering and Computer Science. I am looking for Internship opportunities in the fields of
                    Software
                    Engineering, Electrical Engineering, and Computer Graphics.
                </p>
            </div>
            <div className={"imgBox"}>
                <img src={face} alt={"Memoji"}/>
            </div>
        </>
    );
}
