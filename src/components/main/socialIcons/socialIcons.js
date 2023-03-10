import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import './socialIcons.css'

function SocialIcons() {
    return (
        <div className="socialIcons-container">
            <a className="gitHub icon-container" href="https://github.com/prachiMeshram">
                <div className="iconName">GitHub</div>
                <FaGithub className="icon"/> 
            </a>
            <a className="linkedin icon-container" href="https://www.linkedin.com/in/prachi-meshram-4b5b21209/">
                <div className="iconName">LinkedIn</div>
                 <FaLinkedinIn className="icon"/> 
            </a>
            <a className="insta icon-container" href="https://www.instagram.com/_prachi_mesh/?next=%2F">
                <div className="iconName">Instagram</div>
                 <FaInstagram className="icon"/> 
            </a>
        </div>
    )
}

export default SocialIcons;