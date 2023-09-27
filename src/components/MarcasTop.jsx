import React from 'react'
import Image from 'next/image'
import marcasTopImg from '@/data/MarcasTopData'

export default function MarcasTop() {

    const marcas = marcasTopImg.map((marca) => {
        let img = marca.img
        return (
            <div className="col-md-4" key={marca.id}>
                <div className="bg-image hover-overlay ripple border-marcas m-2">
                    <Image src={img} className="img-fluid" alt={marca.title} width={658} height={494}/>
                    <a href={marca.url ? marca.url : "#"} target={marca.url ? '_blank' : ''}>
                        <div className="mask" style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}></div>
                    </a>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className="sectionParallaxMarcas parallaxMarcas">
                <div className="nuestrasMarcas" id="">
                    <h3 className="nuestrasMarcas-title pt-5">Nuestras marcas Top</h3>
                    <div className="container">
                        <div className=" idMarcasTopContainer row" style={{ padding: '50px 80px' }}>
                            {marcas}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
