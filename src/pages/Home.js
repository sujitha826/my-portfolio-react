import React from "react";
import "../styles/Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";


function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Hi, My Name is Pedro</h2>
                <div className="prompt">
                    <p>A Software Developer with a passion for learning, creating and testing.</p>
                    <LinkedInIcon />
                    <EmailIcon />
                    <GithubIcon />
                </div>
            </div>
            <div className="skills">
                <h1> Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                            ReactJS, Redux, HTML, CSS, NPM,
                            StyledComponents
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            NodeJS, ExpressJS, 
                            MySQL, MongoDB, AWS S3, MS SQL
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>JavaScript, Python, TypeScript</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;