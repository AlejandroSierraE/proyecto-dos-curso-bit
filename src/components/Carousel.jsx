'use client'
import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import './Carousel.css'

export default function Carousel() {

    return (
        <>
            <MDBCarousel showIndicators pause={"true"} showControls fade carouselInnerClassName="introCarousel">
                <MDBCarouselItem
                    className='w-100 d-block'
                    captionClassName="d-block mask"
                    itemId={1}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                    alt='...'
                >
                    
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white text-center">
                        <h5 className="mb-3">First slide label</h5>
                        <p className="mb-4">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <a className="btn btn-outline-light btn-lg m-2" href="${item.link}" target="_blank" role="button">Leer más</a>
                    </div>
                </div>
                  
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                    alt='...'
                >
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
            </MDBCarousel>
        </>

    );
}