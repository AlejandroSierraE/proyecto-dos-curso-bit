import React from 'react'
import { MDBRow, MDBCol, MDBInput, MDBTextArea, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit'

export default function ContactUs() {
    return (
        <>
            {/* <!--Section: Content--> */}
            <section className="mt-5 mb-5" style={{ backgroundColor: "white" }}>
                <h4 className="mb-5 mt-5 text-center "><strong>Contáctanos</strong></h4>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                            <form id="myContactForm" >
                                <p className="text-center">Los campos marcados con * son obligatorios</p>
                                <MDBRow className='mb-4'>
                                    {/* <!-- nombre input --> */}
                                    <MDBCol>
                                        <MDBInput className='mb-4' id='name' label='Nombres *' type='text' />
                                    </MDBCol>
                                    {/* <!-- apellidos input --> */}
                                    <MDBCol>
                                        <MDBInput className='mb-4' id='lastname' label='Apellidos *' type='text' />
                                    </MDBCol>
                                </MDBRow>
                                {/* <!-- Email input --> */}
                                <MDBRow className='mb-4'>
                                    <MDBCol className="col-md-12">
                                        <MDBInput className='mb-4' id='email' label='Correo electrónico *' type='email'></MDBInput>
                                    </MDBCol>
                                </MDBRow>
                                {/* <!-- teléfono input --> */}
                                <MDBRow className='mb-4'>
                                    <MDBCol className="col-md-12">
                                        <MDBInput className='mb-4' id='cellPhone' label='Número celular *' type='tel'></MDBInput>
                                    </MDBCol>
                                </MDBRow>
                                {/* <!-- Asunto input --> */}
                                <MDBRow className='mb-4'>
                                    <MDBCol className="col-md-12">
                                        <MDBTextArea label='Asunto *' id='asunto' rows={4} />
                                    </MDBCol>
                                </MDBRow>
                                {/* <!-- newsletter checkbox --> */}
                                <MDBRow className='mb-4 justify-content-center'>
                                    <MDBCol md='6' className='d-flex justify-content-center'>
                                        <MDBCheckbox className=' mb-3 mb-md-0' defaultChecked label='Subscribe to our newsletter' id='flexCheckChecked' value='' />
                                    </MDBCol>
                                </MDBRow>
                                <MDBBtn type='submit' block className='mb-4'>Enviar</MDBBtn>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Section: Content--> */}
        </>
    )
}
