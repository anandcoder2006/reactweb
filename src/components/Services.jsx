import React from 'react'
import '../styles/services.scss'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'

const Services = () => {
    return (
        <div className='services'>
            <Carousel infiniteLoop
             autoPlay 
             showStatus={false} 
             showArrows={false}
             showThumbs={false}>
                <div>
                    <img src={img1} alt="img1" />
                    <p className='legend'>this is nebw s</p>
                </div>
                <div>
                <img src={img1} alt="img1" />
                <p className='legend'>this is nebw s</p>
            </div>
            </Carousel>
        </div>
    )
}

export default Services