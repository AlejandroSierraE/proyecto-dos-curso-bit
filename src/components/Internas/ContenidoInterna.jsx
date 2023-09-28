import React from 'react'
import VideoCard from './VideoCard'
import ImageCard from './ImageCard'

export default function ContenidoInterna({titulo,p1,p2,p3,p4,imgUrl,cardContent,poster,srcVideoCard}) {
  return (
    <>
        <div className="row text-justify">
            <div className="col-md-9 col-sm-12">
                <h5>{titulo}</h5>
                <p>
                    {p1}
                </p>
                <p>
                    {p2}
                </p>
                <p>
                    {p3}
                </p>
            </div>
            { cardContent === "img" ? <ImageCard src={imgUrl}/> : <VideoCard poster={poster} srcVideoCard={srcVideoCard}/> }
        </div>
        <div className="row text-justify">
            <div className="col-md-12 col-sm-12">
                <p>
                    {p4}
                </p>
            </div>
        </div>
    </>
  )
}
