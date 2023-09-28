import React from 'react'

export default function VideoCard({poster, srcVideoCard}) {
    return (
        <>
            <div className="col-md-3 col-sm-12 justify-content-center align-content-center align-items-center d-flex">
                <div className="bg-image rounded-5" data-mdb-ripple-color="light">
                    <video
                        className="img-fluid"
                        crossOrigin=""
                        autoPlay
                        poster={poster}
                        loop
                        muted
                        playsInline
                        preload="none"
                        style={{borderRadius:"1rem"}}
                    >
                        <source
                            src={srcVideoCard}
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
        </>
    )
}
