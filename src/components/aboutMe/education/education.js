import React from 'react';
import Header from '../../../ulElements/header/header';
import './education.css'
import EducationElem from './educationElem/educationElem';

function Education () {
    const educationList = [
        {
            year: '2020 - 2024',
            institute: 'Indian Institute of Technology,  Madras',
            description: 'I am a final year undergraduate, pursuing Bachelor in Chemical Engineering from the Institute , ranked as the best educational institute in the country with a CGPA of 7.3'
        },
        {
            year: '2019 - 2020',
            institute: 'Disha Science, Commerce, and Arts Jr. College',
            description: 'Scored 89.08%  in class 12th, along with cracking JEE- Advanced,  NSTSE exam (conducted by unified council)  '
        },
        {
            year: '2017-2018',
            institute: 'St. Claret English Medium School',
            description: 'Completed my secondary education  in CBSE board with 89 %  in class 10th along with getting involved in many extra-curricular activities'
        },
    ];
    return (
        <div className='education-container'>
            <Header heading={'EDUCATION'} />
            <div className='educationElem-container'>
                {
                    educationList.map((educationElem,index) => {
                        return(
                        <EducationElem education = {educationElem} index = {index} />
                    )})
                }
            </div>
        </div>
    )
}

export default Education;