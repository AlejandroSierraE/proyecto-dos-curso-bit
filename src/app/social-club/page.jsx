'use client'
import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTypography,
  MDBTextArea,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import PrivateRoute from '@/components/PrivateRoute'
import '@/app/social-club/social-club.css'

export default function SocialClub() {
  return (
    <PrivateRoute>
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
      <MDBRow>
        <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
          <h5 className="font-weight-bold mb-3 text-center text-lg-start">
            Miebro
          </h5>

          <MDBCard>
            <MDBCardBody>
              <MDBTypography listUnStyled className="mb-0">
                <li
                  className="p-2 border-bottom"
                  style={{ backgroundColor: "#eee" }}
                >
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">John Doe</p>
                        <p className="small text-muted">
                          ¿Hola estás ahí?
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1">Just now</p>
                      <span className="badge bg-danger float-end">1</span>
                    </div>
                  </a>
                </li>
                <li className="p-2 border-bottom">
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Danny Smith</p>
                        <p className="small text-muted">
                          El test drive fue de locos...
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1">5 mins ago</p>
                    </div>
                  </a>
                </li>
                <li className="p-2 border-bottom">
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Alex Steward</p>
                        <p className="small text-muted">
                          Compre el pagani !...
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1">Yesterday</p>
                    </div>
                  </a>
                </li>
                <li className="p-2 border-bottom">
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Ashley Olsen</p>
                        <p className="small text-muted">
                          Tengo una cons....
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1">Yesterday</p>
                    </div>
                  </a>
                </li>
                <li className="p-2 border-bottom">
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Kate Moss</p>
                        <p className="small text-muted">
                          Tienes conocimient...
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1">Yesterday</p>
                    </div>
                  </a>
                </li>
                <li className="p-2 border-bottom">
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Lara Croft</p>
                        <p className="small text-muted">
                        Los Rolls-Royce son un símbolo ..
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1">Yesterday</p>
                    </div>
                  </a>
                </li>
                <li className="p-2">
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Brad Pitt</p>
                        <p className="small text-muted">
                          soy el brad jeje .
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1">5 mins ago</p>
                      <span className="text-muted float-end">
                        <MDBIcon fas icon="check" />
                      </span>
                    </div>
                  </a>
                </li>
              </MDBTypography>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="6" lg="7" xl="8">
          <MDBTypography listUnStyled>
            <li className="d-flex justify-content-between mb-4">
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                width="60"
              />
              <MDBCard>
                <MDBCardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Lara Croft</p>
                  <p className="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> 12 mins ago
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                  ¡Hola Brad! ¿Has visto el nuevo modelo de Tesla? Es absolutamente impresionante.😍
                  </p>
                </MDBCardBody>
              </MDBCard>
            </li>
            <li class="d-flex justify-content-between mb-4">
              <MDBCard className="w-100">
                <MDBCardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Brad Pitt</p>
                  <p className="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> 13 mins ago
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                  ¡Hola Lara! Sí, lo he visto. Es un verdadero avance en la industria automotriz. Pero, ¿qué opinas de los deportivos italianos? Siempre he soñado con un Lamborghini.
                  </p>
                </MDBCardBody>
              </MDBCard>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="60"
              />
            </li>
            <li className="d-flex justify-content-between mb-4">
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                width="60"
              />
              
              <MDBCard>
                <MDBCardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Lara Croft</p>
                  <p className="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> 14 mins ago
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                  ¡Totalmente de acuerdo! Los Lamborghini son increíbles. Pero no puedo evitar enamorarme de la elegancia de los Rolls-Royce. ¿Has tenido la oportunidad de ver alguno de cerca?
                  </p>
                </MDBCardBody>
              </MDBCard>
            </li>
            <li class="d-flex justify-content-between mb-4">
              <MDBCard className="w-100">
                <MDBCardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Brad Pitt</p>
                  <p className="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> 15 mins ago
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                  Los Rolls-Royce son un símbolo de lujo y prestigio. Aún no he tenido la oportunidad de ver uno en persona, pero espero que algún día pueda conducir uno. 😄
                  </p>
                </MDBCardBody>
              </MDBCard>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="60"
              />
            </li>
            <li className="bg-white mb-3">
              <MDBTextArea label="Message" id="textAreaExample" rows={4} />
            </li>
            <MDBBtn color="info" rounded className="float-end">
              Send
            </MDBBtn>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </PrivateRoute>
  );
}