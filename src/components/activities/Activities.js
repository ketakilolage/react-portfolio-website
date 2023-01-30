import React from 'react';
import './activities.css';
import ACT1 from '../../assets/act1.png';

// import Swiper core and required modules
import {Pagination} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        icon: ACT1,
        name: 'Google ExploreCSR Mentor 2023',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies viverra nulla ac pellentesque. Duis ut ipsum vitae lacus gravida venenatis non in lorem. Aenean accumsan nisl vitae justo ultricies.'
    },
    {
        icon: ACT1,
        name: 'Google ExploreCSR Mentor 2023',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies viverra nulla ac pellentesque. Duis ut ipsum vitae lacus gravida venenatis non in lorem. Aenean accumsan nisl vitae justo ultricies.'
    },
    {
        icon: ACT1,
        name: 'Google ExploreCSR Mentor 2023',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies viverra nulla ac pellentesque. Duis ut ipsum vitae lacus gravida venenatis non in lorem. Aenean accumsan nisl vitae justo ultricies.'
    }
]

const Activities = () => {
    return (
        <section id='activities'>
            <h5>I Gravitate Towards</h5>
            <h2>Leadership and Mentoring</h2>
            
            <Swiper className='container activities__container' 
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({icon, name, about}, index) => {
                        return (
                            <SwiperSlide key={index} className='activity'>
                            <div className='activity__icon'>
                                <img src={icon} alt={name} />
                                </div>
                            <h5 className='activity__name'>{name}</h5>
                            <small className='activity__about'>{about}</small>
                        </SwiperSlide>        
                        )
                    })
                }
            </Swiper>

        </section>
    )
}

export default Activities