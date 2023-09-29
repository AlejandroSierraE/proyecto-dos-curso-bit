'use client'
import React from 'react'
import { MDBIcon } from 'mdb-react-ui-kit'
import '@/components/Internas/VideoBackground.css'

export default function VideoBackground({ poster, src, t1, t2, t3 }) {
  const bajar = () => {
    document.getElementById("containerBread").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="bg-image introBanner">
        <video
          className="img-fluid"
          crossOrigin=""
          autoPlay
          poster={poster}
          loop
          muted
          playsInline
          preload="none"
        >
          <source
            src={src}
            type="video/mp4"
          />
        </video>
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <h5 className="text-white">{t1}</h5>
            <h2 className="text-white mb-0">{t2}</h2>
            <p style={{ color: "#9e9b9b" }}>{t3}</p>
            <div id="btnDown" className="badge down" onClick={bajar}><MDBIcon fas icon="angle-double-down fa-3x" /></div>
          </div>
        </div>
      </div>
    </>
  );
}


