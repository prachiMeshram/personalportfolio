import React from 'react'
import Header from '../../ulElements/header/header';
import './projects.css'

function Projects () {
    return (
        <div className='projects-container'>
            <div className='heading-carousel-container'>
                <div className='heading-container'>
                    <Header heading= {'PROJECTS'} />
                </div>
                <div className='projects-carousel-container'>
                    {/* <Carousel>
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
                    </Carousel> */}
                </div>
            </div>
        </div>
    )
}

export default Projects;