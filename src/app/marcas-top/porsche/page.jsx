import React from 'react'
import VideoBackground from '@/components/Internas/VideoBackground'
import BreadCrumb from '@/components/Internas/BreadCrumb'
import ContenidoInterna from '@/components/Internas/ContenidoInterna'
import GaleriaVehiculos from '@/components/Internas/GaleriaVehiculos'

import dataPorsche from '@/data/PorschePageData'


export default function Porsche() {
  const titulo = "PORSCHE"
  const rutaUno = "Home"
  const rutaDos = "Nuestras marcas top"
  const rutaTres = "Porsche"
  const dataVideoBackground = dataPorsche.videoBackground
  const dataContent = dataPorsche.contenido
  const dataGalery = dataPorsche.gallery

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
      <div id="containerP" className="container">
        <ContenidoInterna 
          titulo={dataContent.titulo} 
          p1={dataContent.parrafo1} 
          p2={dataContent.parrafo2} 
          p3={dataContent.parrafo3} 
          p4={dataContent.parrafo4} 
          cardContent={dataContent.cardContent}
          poster={dataContent.poster}
          srcVideoCard={dataContent.srcVideo}
        />
        <GaleriaVehiculos dataGalery={dataGalery} />
      </div>
    </>
  )
}
