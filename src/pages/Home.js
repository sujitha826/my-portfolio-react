import React from "react";
import "../styles/Home.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';


function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Hi, My Name is Sujitha K.</h2>
                <div className="prompt">
                    <p>A Software Developer with a passion for learning, creating and testing.</p>
                    <LinkedInIcon />
                    <EmailIcon />
                    <GitHubIcon />
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
                            MySQL, MongoDB, AWS S3, REDIS
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