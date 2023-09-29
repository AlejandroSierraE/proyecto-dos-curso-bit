'use client'
import React, { useEffect } from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'

export default function IrArriba() {
    const subir = () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        btnSubir.classList.remove('btn')
    }

    useEffect(() => {
        const btnSubir = document.getElementById("btnSubir");
        const handleScroll = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                btnSubir.style.display = "block";
            } else {
                btnSubir.style.display = "none";
            }
        };

        window.addEventListener('scroll', handleScroll);
        btnSubir.classList.remove('btn')

    }, []);
    return (
        <>
            <MDBBtn id="btnSubir" className="boton-subir d-none-sm" onClick={subir}>
                <MDBIcon fas icon="angle-up" />
            </MDBBtn>
        </>
    )
}
