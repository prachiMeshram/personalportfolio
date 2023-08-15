import React from 'react'
import Header from '../../ulElements/header/header';
import Carousel, {CarouselItem} from '../../ulElements/carousel/carousel';
import Card from '../../ulElements/card/card.js';
// import CardNew from '../../ulElements/cardNew/cardNew.js';
import ProfilePic from '../../assets/Prachiclear.jpeg';
import './projects.css'

function Projects () {
    return (
        <div className='projects-container'>
            
            <Header heading={"PROJECTS"}/>

            {/* <CardNew title = 'CardNew'
            imageUrl=''
            body='rbhefbehybgrbchjdwnurhvdbbbficjzknqfuigces cyeqiyfcquievbfiyqevchbciqu fribvwnvwjvdoijqecmkaslncruvwurvbam,s hjwvbub'
            /> */}

            <Card cardObj={{image: ProfilePic, position:"1", org: "TechTable"}} />
            
            {/* <div className='projects-carousel-container'>
                <Carousel>
                    <CarouselItem>
                        <Card cardObj={{image: ProfilePic, position:"1", org: "TechTable"}} />
                    </CarouselItem>

                    <CarouselItem>
                        <Card cardObj={{image: ProfilePic, position:"2", org: "TechTable"}} />
                    </CarouselItem>

                    <CarouselItem>
                            <Card cardObj={{image: ProfilePic, position:"3", org: "TechTable"}} />
                    </CarouselItem>
                </Carousel>
            </div> */}
        </div>
    )
}

export default Projects;