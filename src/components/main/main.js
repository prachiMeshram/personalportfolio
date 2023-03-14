import React, { Component } from "react";
import AboutMe from "../aboutMe/aboutMe";
import Education from "../aboutMe/education/education";
import ContactUs from "../contactUs/contactUs";
import Home from "../home/home";
import LeftDecoration from "./leftDecoration/leftDecoration";
import "./main.css"
import Navbar from "./navbar/navbar";
import RightDecoration from "./rightDecoration/rightDecoration";
import SocialIcons from "./socialIcons/socialIcons";


function Main() {
    return(
        <div className="main">
            
            {/* {navBar} */}
            <Navbar/>
            {/* {Components} */}
            <div className="component-container">
                {/* <AboutMe /> */}
                {/* <Education/> */}
                {/* <ContactUs /> */}
                <Home />
            </div>
            {/* {socialIcons} */}
            <SocialIcons/>
            {/* {leftDecoration} */}
            <LeftDecoration/>
            
            <RightDecoration/>
            {/* {rightDecoration} */}
        </div>
    )
}

export default Main;