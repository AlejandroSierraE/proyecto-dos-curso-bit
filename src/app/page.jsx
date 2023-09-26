'use client'
import Carousel from "@/components/carousel"
import Image from 'next/image'
import Testimonials from "@/components/Testimonials"
import ContactUs from "@/components/ContactUs"
import Footer from "@/components/footer"
import ferrariLogo from '../assets/img/marcasTop/ferrari-logo2.jpg'
import lamborghiniLogo from '../assets/img/marcasTop/lamborghini-logo2.jpg'
import porscheLogo from '../assets/img/marcasTop/porsche-logo.jpg'
import "./page.css"

export default function Home() {
  return (
    <>
      <Carousel></Carousel>
      <div className="welcomeSection section-welcome">
        <h3 className="welcomeTitle">Bienvenidos a carros exclusivos</h3>
        <p className="welcomeParagraph">
            En este sitio encontrarás gran variedad de carros deportivos y de lujo con el objetivo de
            que te informes sobre sus caracteristicas, estilos diseños y tomes una desición acertada
            teniendo en cuenta tus gustos y el estilo que manejes. <br/> ¡Esperamos que disfrutes del contenido
            que te brindamos, es con todo el amor y la pasión a los autos!
        </p>
      </div>
      {/* section-parallax */}
      <div className="sectionParallaxMarcas parallaxMarcas">
          <div className="nuestrasMarcas" id="">
              <h3 className="nuestrasMarcas-title pt-5">Nuestras marcas Top</h3>
              <div className="container">
                  <div className=" idMarcasTopContainer row" style={{padding:'50px 80px'}}>
                    <div className="col-md-4">
                      <div className="bg-image hover-overlay ripple border-marcas m-2">
                        <Image src={ferrariLogo} className="img-fluid" alt="Ferrari" />
                        <a href="${brand.url}" target="_blank">
                          <div className="mask" style={{backgroundColor: "rgba(57, 192, 237, 0.2)"}}></div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-image hover-overlay ripple border-marcas m-2">
                        <Image src={lamborghiniLogo}  className="img-fluid" alt="Ferrari" />
                        <a href="${brand.url}" target="_blank">
                          <div className="mask" style={{backgroundColor: "rgba(57, 192, 237, 0.2)"}}></div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-image hover-overlay ripple border-marcas m-2">
                        <Image src={porscheLogo}  className="img-fluid" alt="Ferrari" />
                        <a href="${brand.url}" target="_blank">
                          <div className="mask" style={{backgroundColor: "rgba(57, 192, 237, 0.2)"}}></div>
                        </a>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
      {/* section-parallax */}
      {/*Services section*/}
      <div className="nuestrosServicios-section">
          <div className="container p-5">
              <h3 className="nuestrosServicios-title pt-5 pb-5">Nuestros servicios</h3>
              <div id="ourServicesContainer" className="row g-2">
                <div className="col-md-6 col-sm-12">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">titulo</h5>
                                <p className="card-text">descripcion</p>
                                <a href="${service.url}" className="btn btn-primary">link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">titulo</h5>
                                <p className="card-text">descripcion</p>
                                <a href="${service.url}" className="btn btn-primary">link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">titulo</h5>
                                <p className="card-text">descripcion</p>
                                <a href="${service.url}" className="btn btn-primary">link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">titulo</h5>
                                <p className="card-text">descripcion</p>
                                <a href="${service.url}" className="btn btn-primary">link</a>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
      {/*Services section*/}
      <Testimonials/>
      <ContactUs/>
      <Footer></Footer>
    </>
  )
}
