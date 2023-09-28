import React from 'react'
import Image from 'next/image'

export default function ImagenCard({src}) {
    return (
        <>
            <div className="col-md-3 col-sm-12 justify-content-center align-content-center align-items-center d-flex">
                <Image className="img-fluid p-3" style={{ borderRadius: '4rem' }}
                    src={src} alt="" width={'640'} height={'640'} />
            </div>
        </>
    )
}
