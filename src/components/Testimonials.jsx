import React from 'react'
import "./Testimonials.css"

export default function Testimonials() {
  return (
    <>
        {/* <!-- Testimonials section --> */}
    <div className="testimonios-section">
        <figure className="text-center">
            <figcaption className="blockquote-footer">
                Testimonios
            </figcaption>
            <blockquote className="blockquote">
                <h3>Opiniones de nuestros clientes</h3>
            </blockquote>
        </figure>

        {/* <!-- Carousel wrapper --> */}
        <div id="TestimonialsCarouselMultiItemExample" className="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
            {/* <!-- Inner --> */}
            <div id="carouselContent" className="carousel-inner py-4">
                {/* <!-- Single item --> */}
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <img className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar"
                                    style={{width: "150px"}} />
                                <h5 className="mb-3">Sofía O.</h5>
                                <p className="text-muted">
                                    <i className="fas fa-quote-left pe-2"></i>
                                    Los carros exclusivos de esta empresa son simplemente asombrosos. Cada vez que me
                                    siento al volante de uno de sus
                                    vehículos, siento que estoy en la cima del mundo.
                                </p>
                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 d-none d-lg-block">
                                <img className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
                                    style={{width: "150px"}} />
                                <h5 className="mb-3">Camilo P.</h5>
                                <p className="text-muted">
                                    <i className="fas fa-quote-left pe-2"></i>
                                    La atención al cliente y la calidad de los carros exclusivos que ofrecen son
                                    incomparables. Nunca me he sentido más
                                    satisfecho con una compra.
                                </p>
                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li>
                                        <i className="fas fa-star-half-alt fa-sm"></i>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-4 d-none d-lg-block">
                                <img className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                                    style={{width: "150px"}} />
                                <h5 className="mb-3">Valeria Cadavid</h5>
                                <p className="text-muted">
                                    <i className="fas fa-quote-left pe-2"></i>
                                    Desde que compré mi primer carro exclusivo aquí, mi vida cambió por completo. La
                                    elegancia y el rendimiento de estos
                                    vehículos son inigualables.
                                </p>
                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="far fa-star fa-sm"></i></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Inner --> */}
        </div>
        {/* <!-- Carousel wrapper --> */}
    </div>
    {/* <!-- End testimonials section --> */}
    </>
  )
}
