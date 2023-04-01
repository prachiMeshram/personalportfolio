import React from "react";
import './home.css';
import decorationImg from '../../assets/homeDecorationCompo.svg'
import cIcon from '../../assets/skillsIcons/cIcon.svg'
import cppIcon from '../../assets/skillsIcons/cppIcon.svg'
import cssIcon from '../../assets/skillsIcons/cssIcon.svg'
import githubIcon from '../../assets/skillsIcons/githubIcon.svg'
import htmlIcon from '../../assets/skillsIcons/htmlIcon.svg'
import jsIcon from '../../assets/skillsIcons/jsIcon.svg'
import reactIcon from '../../assets/skillsIcons/reactIcon.svg'
import typescriptIcon from '../../assets/skillsIcons/typescriptIcon.svg'

function Home() {
    const iconsList = [ 
        {
            src: cIcon,
            title: "C"
        },
        {
            src: cppIcon,
            title: "Cpp"
        },
        {
            src: cssIcon,
            title: "Css"
        },
        {
            src: githubIcon,
            title: "Github"
        },
        {
            src: htmlIcon,
            title: "Html"
        },
        {
            src: jsIcon,
            title: "Js"
        },
        {
            src: reactIcon,
            title: "React"
        },
        {
            src: typescriptIcon,
            title: "Typescript"
        }
    ]
    return (
        <div className="home-container">
            <div className="text-container">
                <div className="text-box">
                    <div className="greet-text">Hi, I'm</div>
                    <div className="name-text">Prachi Kishor Meshram.</div>
                    <div className="one-sentence-text">I build things for the web.</div>
                    <div className="description-text"><p>I value clarity, empathy and integrity above all else. These ideals guide my approach to problem solving and life in general.</p></div>
                </div>
            </div>
            <div className="icon-container">
            {
                iconsList.map((skill,i)=>{
                        return (
                            <div className={`icons ${skill.title}`}>
                                <img className="img" src= {skill.src}></img>
                            </div>
                        )
                    })
                }
                {/* <div className="icons react">
                    <img className="img" ></img>
                </div>
                <div className="icons typescript"></div>
                <div className="icons css"></div>
                <div className="icons C-lang"></div>
                <div className="icons github"></div>
                <div className="icons cpp"></div>
                <div className="icons jScript"></div>
                <div className="icons html"></div> */}
            </div>
            {/* <div className="decoration-box">
                <img src={decorationImg} className="decoration-img"/>
                <div className="triangle-one"></div>
                <div className="triangle-two"></div>
            </div> */}
        </div>
    )
}

export default Home;