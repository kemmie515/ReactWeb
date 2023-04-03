import React from 'react'
import './testimonials.css'
import "../../index.css"

import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data =[
    {
avatar:AVTR1,
name: 'Tina Snow',
review:'lorem ipsum modi alias animi dolorem aliquam ea eum beatea mairoes consecturaLorem ipsom dolor sit amet consctetur elit.Iusto quod nam impedit soluta odio possimus!'
    },
    {
        avatar:AVTR2,
    
        name: 'Shatta Wale',
        review:'lorem ipsum modi alias animi dolorem aliquam ea eum beatea mairoes consectura Lorem ipsom dolor sit amet consctetur elit.Iusto quod nam impedit soluta odio possimus!'
            },
            {
                avatar:AVTR3,
                
                name: 'Kwame Despite',
                review:'lorem ipsum modi alias animi dolorem aliquam ea eum beatea mairoes consectura Lorem ipsom dolor sit amet consctetur elit.Iusto quod nam impedit soluta odio possimus!'
                    },
                    {
                        avatar:AVTR4,
                        
                        name: 'Nana Ana McBrown',
                        review:'lorem ipsum modi alias animi dolorem aliquam ea eum beatea mairoes consectura Lorem ipsom dolor sit amet consctetur elit.Iusto quod nam impedit soluta odio possimus!'
                            }
]



const Testimonials = () => {
    return (
        <section id="testimonials">
<h5>Reviews From Clients</h5>
<h2>Testimonials</h2>
<Swiper className='container testimonials__container'  
 // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
  {data.map(({avatar,name,review}, index) =>(
    <SwiperSlide key={index} className="testimonial">
        <div className= "client__avatar">
            <img src={avatar} alt="avatar"/>
        </div>
        <div className='client__name'>
           {name}
        </div>
        <div className='client__review'>
             {review}
        </div>

    </SwiperSlide>
  ))}
</Swiper>
</section>
    )
}
export default Testimonials

