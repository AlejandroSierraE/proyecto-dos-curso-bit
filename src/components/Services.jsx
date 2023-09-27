import React from 'react'
import ourServices from '@/data/ServicesData'

export default function Services() {
    const services = ourServices.map((service) => {
        return (
            <div className="col-md-6 col-sm-12" key={service.id}>
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                    <a href={service.url} className="btn btn-primary">{service.linkText}</a>
                  </div>
                </div>
              </div>
            </div>
        )
    })
  return (
    <>
        <div className="nuestrosServicios-section">
        <div className="container p-5">
          <h3 className="nuestrosServicios-title pt-5 pb-5">Nuestros servicios</h3>
          <div id="ourServicesContainer" className="row g-2">
            {services}
          </div>
        </div>
      </div>
    </>
  )
}
