'use client'
import React from 'react'
import ImageBackground from '@/components/Internas/ImageBackground'
import BreadCrumb from '@/components/Internas/BreadCrumb'
import ContenidoInterna from '@/components/Internas/ContenidoInterna'
import GaleriaVehiculos from '@/components/Internas/GaleriaVehiculos'

import dataLambo from '@/data/LamborghiniPageData'

export default function Lamborghini() {
  const titulo = "LAMBORGHINI"
  const rutaUno = "Home"
  const rutaDos = "Nuestras marcas top"
  const rutaTres = "Lamborghini"
  const idbread = "containerLBread"
  const dataImageBackground = dataLambo.imageBackground
  const dataContent = dataLambo.contenido
  const dataGalery = dataLambo.gallery
  
  return (
    <>
      <ImageBackground 
        src={dataImageBackground.src} 
        t1={dataImageBackground.text1} 
        t2={dataImageBackground.text2} 
        t3={dataImageBackground.text3}
      />
      <BreadCrumb 
        titulo={titulo} 
        rutaUno={rutaUno} 
        rutaDos={rutaDos} 
        rutaTres={rutaTres}
        idbread={idbread}
      />
      <div id="containerL" className="container">
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
