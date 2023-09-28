'use client'
import React from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import CardList from './CardList'

export default function GaleriaVehiculos({dataGalery}) {

    const vehiculos = dataGalery.map((vehiculo) => {
        return (
            <div className="col" key={vehiculo.id} id={vehiculo.id}>
                <CardList 
                    imgUrl={vehiculo.img}
                    title={vehiculo.title}
                    description={vehiculo.description}
                    characteristicOne={vehiculo.characteristicOne}
                    characteristicTwo={vehiculo.characteristicTwo}
                    characteristicThree={vehiculo.characteristicThree}
                    urlQuieroEste={vehiculo.urlQuieroEste}
                    urlCustom={vehiculo.urlCustom}
                />
            </div>
        )
    })

    return (
        <>
            <div>
                <h3 className="text-center m-4">NUESTRA GALERIA DE VEHÍCULOS</h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
                {vehiculos}
            </div>
            <div className="d-flex justify-content-center">
                <MDBBtn className='m-5' type='button' outline rounded>
                    Ver más <MDBIcon fas icon="chevron-down" />
                </MDBBtn>
            </div>
        </>
    )
}
