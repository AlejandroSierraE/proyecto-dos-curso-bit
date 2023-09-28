import React from 'react';
import '@/components/Internas/VideoBackground.css'

export default function VideoBackground({ poster, src, t1, t2, t3 }) {

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
            <div id="btnDown" className="badge down" ><i className="fas fa-angles-down fa-3x"></i></div>
          </div>
        </div>
      </div>
    </>
  );
}


