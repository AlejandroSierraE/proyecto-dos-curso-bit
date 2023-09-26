import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function footer() {
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
            <MDBContainer className='p-4'>
                <section className='mb-4'>
                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </section>

                <section className=''>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size="auto">
                                <p className='pt-2'>
                                    <strong>Suscríbete a nuestro boletín</strong>
                                </p>
                            </MDBCol>

                            <MDBCol md='5' start>
                                <MDBInput contrast type='email' label='Correo electrónico' className='mb-4' />
                            </MDBCol>

                            <MDBCol size="auto">
                                <MDBBtn outline color='light' type='submit' className='mb-4'>
                                    Suscribirse
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </section>

                <section className='mb-4'>
                    <p>
                        Descubre la pasión por los coches deportivos en EC.CARROS EXCLUSIVOS S.A.S. Te llevamos al mundo de la velocidad y el lujo.
                        Mantente actualizado con las últimas noticias y reseñas de los modelos más emocionantes. Únete a nuestra comunidad de
                        entusiastas y comparte la emoción de los coches deportivos con nosotros. Tu aventura comienza aquí.
                    </p>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright: 
                <a className="text-white" href="https://mdbootstrap.com/"> Alejandro S. Escobar</a>
            </div>
        </MDBFooter>
    )
}
