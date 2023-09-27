'use client'
import Carousel from "@/components/carousel"
import MarcasTop from "@/components/marcasTop"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import ContactUs from "@/components/ContactUs"

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
          teniendo en cuenta tus gustos y el estilo que manejes. <br /> ¡Esperamos que disfrutes del contenido
          que te brindamos, es con todo el amor y la pasión a los autos!
        </p>
      </div>
      <MarcasTop />
      <Services />
      <Testimonials />
      <ContactUs />
    </>
  )
}
