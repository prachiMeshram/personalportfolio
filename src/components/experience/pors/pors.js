import React from 'react';
import Header from '../../../ulElements/header/header.js';
import PorCard from './porCard/porCard.js';
import './pors.css';

function Pors () {
    const PorsList = [
        {
            position: "Webops Coordinator", 
            img: "", 
            descrip: "Sdfn oIjio i n in nsdjn n kjndfknj jnjk nlsnm lk  jfjn ksdnjk cdncjks n jsdnfj nj fjn is kdvncj nskjnd kj jksjkndk nsjkncjn ksj ncsncsdn jjv jh dffbjhvbdjh bvjbfj hjdfbvdfbvf fjhvjdf bjv adfbjkv dfhjvbdfbvjfdbv jhfdbvjdz vhjvdfb hjvbdfjv nv jhbj vhjfdbjv dfhjb bvj dfjbv jhdhsjh bvjfdbjvbskjvjkfdj kvhj vjkdfjkvfb vbfhdjvbjkdfbvdf bvjd vjkbvjdfvkjdbfjkfbv vjff hjkjkjkb jfvbjhd jhbhjdfb kbkzjb jhbhjkvhj bvhjdfbvjk db dfbvhjd f bj hvbdjkbv ijf j jknn jnbm ", organisation: "Chemical Engineering Society ( ChES ), IITM"
        },
        {
            position: "Finance Manager", 
            img: "", 
            descrip: "Sdfn oIjio i n in nsdjn n kjndfknj jnjk nlsnm lk  jfjn ksdnjk cdncjks n jsdnfj nj fjn is kdvncj nskjnd kj jksjkndk nsjkncjn ksj ncsncsdn jjv jh dffbjhvbdjh bvjbfj hjdfbvdfbvf fjhvjdf bjv adfbjkv dfhjvbdfbvjfdbv jhfdbvjdz vhjvdfb hjvbdfjv nv jhbj vhjfdbjv dfhjb bvj dfjbv jhdhsjh bvjfdbjvbskjvjkfdj kvhj vjkdfjkvfb vbfhdjvbjkdfbvdf bvjd vjkbvjdfvkjdbfjkfbv vjff hjkjkjkb jfvbjhd jhbhjdfb kbkzjb jhbhjkvhj bvhjdfbvjk db dfbvhjd f bj hvbdjkbv ijf j jknn jnbm ", organisation: "Shaastra 2023, IIT Madras"
        },
    ]
    return (
        <div className='pors-container' >
            <Header heading = {'Positions of Responsibilities'} />

            <div className='POR-cards-container'>
                {
                    PorsList.map((por,i)=>{
                        return <PorCard POR={por} index={i}/>
                    })
                }
            </div>
        </div>
    )
}

export default Pors;