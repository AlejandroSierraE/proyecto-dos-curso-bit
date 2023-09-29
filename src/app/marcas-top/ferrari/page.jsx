import React from 'react'
import VideoBackground from '@/components/Internas/VideoBackground'
import BreadCrumb from '@/components/Internas/BreadCrumb'
import ContenidoInterna from '@/components/Internas/ContenidoInterna'
import GaleriaVehiculos from '@/components/Internas/GaleriaVehiculos'
import dataFerrari from '@/data/FerrariPageData'

export default function Ferrari() {
  const titulo = "FERRARI"
  const rutaUno = "Home"
  const rutaDos = "Nuestras marcas top"
  const rutaTres = "Ferrari"
  const dataVideoBackground = dataFerrari.videoBackground
  const dataContent = dataFerrari.contenido
  const dataGalery = dataFerrari.gallery

  return (
    <>
      <VideoBackground 
        poster={dataVideoBackground.poster} 
        src={dataVideoBackground.src} 
        t1={dataVideoBackground.text1} 
        t2={dataVideoBackground.text2} 
        t3={dataVideoBackground.text3}
      />
      <BreadCrumb 
        titulo={titulo} 
        rutaUno={rutaUno} 
        rutaDos={rutaDos} 
        rutaTres={rutaTres}
      />
      <div id="containerF" className="container">
        <ContenidoInterna 
          titulo={dataContent.titulo} 
          p1={dataContent.parrafo1} 
          p2={dataContent.parrafo2} 
          p3={dataContent.parrafo3} 
          p4={dataContent.parrafo4} 
          cardContent={dataContent.cardContent}
          imgUrl={dataContent.ulrImg} 
        />
        <GaleriaVehiculos dataGalery={dataGalery} />
      </div>
    </>
  )
}
