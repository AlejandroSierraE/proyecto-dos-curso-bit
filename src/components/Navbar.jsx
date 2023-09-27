'use client'
import { React, useState } from 'react';
import Link from 'next/link';

import './Navbar.css'


import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
  } from 'mdb-react-ui-kit';
  
  export default function Navbar() {
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    return (
        <MDBNavbar expand='lg' className='navbar navbar-expand-lg navbar-dark d-md-block d-lg-block bg-dark-response' style={{zIndex: 2000}}>
        <MDBContainer fluid>
          <Link href={'/'} ><MDBNavbarBrand >EC</MDBNavbarBrand></Link>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              
              
              {/* Dropdown nuestras marcas */}
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                    Nuestras marcas top
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <Link href={'/marcas-top/ferrari'}><MDBDropdownItem link>Ferrari</MDBDropdownItem></Link>
                    <Link href={'/marcas-top/lamborghini'}><MDBDropdownItem link>Lamborghini</MDBDropdownItem></Link>
                    <Link href={'/marcas-top/porsche'}><MDBDropdownItem link>Porsche</MDBDropdownItem></Link>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              {/* Dropdown nuestras marcas */}
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                    Clasificación
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Deportivo</MDBDropdownItem>
                    <MDBDropdownItem link>Gran turismo</MDBDropdownItem>
                    <MDBDropdownItem link>Superdeportivo</MDBDropdownItem>
                    <MDBDropdownItem link>Bólido muscle americano</MDBDropdownItem>
                    <MDBDropdownItem link>Descapotable</MDBDropdownItem>
                    <MDBDropdownItem link>Todoterreno</MDBDropdownItem>
                    <MDBDropdownItem link>Vehículo de utilidad deportivo (SUV)</MDBDropdownItem>
                    <MDBDropdownItem link>Mediano de lujo</MDBDropdownItem>
                    <MDBDropdownItem link>Largo de lujo</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <Link href={'#'}><MDBNavbarLink>Servicios</MDBNavbarLink></Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link href={'#'}><MDBNavbarLink>Quiénes somos</MDBNavbarLink></Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link href={'#'}><MDBNavbarLink>Contáctanos</MDBNavbarLink></Link>
              </MDBNavbarItem>
              
            </MDBNavbarNav>
            <ul class="navbar-nav d-flex flex-row">
              <li class="nav-item" style={{ width: 'max-content'}}>
                    <Link class="nav-link" href={'#'}>
                      <MDBIcon fas icon="sign-in-alt" size='lg' fixed/>{' '}Iniciar sesión
                    </Link>
                </li>
            </ul>

            <ul class="navbar-nav d-flex flex-row">
                {/* <!-- Icons --> */}
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                        rel="nofollow" target="_blank">
                        <MDBIcon fab icon='youtube' />
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="https://www.facebook.com/mdbootstrap" rel="nofollow"
                        target="_blank">
                        <MDBIcon fab icon='facebook-f' />
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="https://twitter.com/MDBootstrap" rel="nofollow" target="_blank">
                        <MDBIcon fab icon='twitter' />
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="https://github.com/mdbootstrap/mdb-ui-kit" rel="nofollow"
                        target="_blank">
                        <MDBIcon fab icon='github' />
                    </a>
                </li>
            </ul>

          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }