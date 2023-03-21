import React from 'react'
import Header from '../../ulElements/header/header';
import Carousel, {CarouselItem} from '../../ulElements/carousel/carousel';
import Card from '../../ulElements/card/card.js';
import ProfilePic from '../../assets/Prachiclear.jpeg';
import './projects.css'

function Projects () {
    return (
        <div className='projects-container'>
            
            <Header heading={"PROJECTS"}/>
            
            <div className='projects-carousel-container'>
                <Carousel>
                    <CarouselItem>
                        <div style={{width: "100%", height: "100%"}}>
                            <Card cardObj={{image: ProfilePic, position:"1", org: "TechTable"}} />
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                    <div style={{width: "100%", height: "100%"}}>
                            <Card cardObj={{image: ProfilePic, position:"2", org: "TechTable"}} />
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                    <div style={{width: "100%", height: "100%"}}>
                            <Card cardObj={{image: ProfilePic, position:"3", org: "TechTable"}} />
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
        </div>
    )
}

export default Projects;