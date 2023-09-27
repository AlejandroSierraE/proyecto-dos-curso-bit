'use client'
import { React } from 'react';
import carouselDataItems from '@/data/carouselData'; 
import { MDBCarousel,MDBCarouselItem } from 'mdb-react-ui-kit';
import './Carousel.css'

export default function Carousel() {

    const slides = carouselDataItems.map((item) => {
        return (
            <MDBCarouselItem
                    key={item.id}
                    className='w-100 d-block carousel-amg'
                    captionClassName="d-block mask"
                    itemId={item.id}
                    src={item.backgroundImage}
                    alt={item.title}
                >
                    
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white text-center">
                        <h2 className="mb-3">{item.title}</h2>
                        <h5 className="mb-4">{item.subtitle}</h5>
                        {item.linkText ? <a className="btn btn-outline-light btn-lg m-2" href={item.link} target="_blank" role="button">{item.linkText}</a> : '' }
                    </div>
                </div>  
            </MDBCarouselItem>
        )
    })

    return (
        <>
            <MDBCarousel showIndicators showControls fade carouselInnerClassName="introCarousel">
                {slides}
            </MDBCarousel>
        </>

    );
}