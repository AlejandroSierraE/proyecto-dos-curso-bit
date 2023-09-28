import React from 'react'
import {
    MDBCardImage  
} from 'mdb-react-ui-kit';
import '@/components/Internas/ImageBackground.css'

export default function ImageBackground({src,t1,t2,t3}) {
    return (
        <>
            <div className="introBanner bg-image" >
                <MDBCardImage  className="d-block w-100" alt={t2} src={src} />
                <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                        <h5 className="text-white">{t1}</h5>
                        <h2 className="text-white mb-0">{t2}</h2>
                        <p style={{color: "#9e9b9b"}}>{t3}</p>
                        <div id="btnDown" className="badge down"><i className="fas fa-angles-down fa-3x"></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}
