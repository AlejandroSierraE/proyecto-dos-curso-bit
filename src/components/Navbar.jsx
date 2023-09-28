'use client'
import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import firebase from '@/data/Firebase/firebaseAuth'

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

import './Navbar.css'

export default function Navbar() {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const pathname = usePathname()
  const [user, setUser] = useState('')
  const auth = getAuth(firebase)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, (myUser) => {
      if (!myUser) {
        setUser(false)
      } else {
        setUser(true)
      }
      console.log(myUser)
    })
  }, [user])

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        router.push('/login')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <MDBNavbar expand='lg' className={`navbar navbar-expand-lg navbar-dark d-md-block d-lg-block bg-dark-response ${pathname === '/login' || pathname === '/social-club' ? 'bg-dark' : ''}`} style={{ zIndex: 2000 }}>
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

            {user ?
              <MDBNavbarItem>
                <Link href={'/social-club'}>
                  <MDBNavbarLink>Social club <MDBIcon fab icon="rocketchat" />{' '}</MDBNavbarLink>
                </Link>
              </MDBNavbarItem> : ''
            }
          </MDBNavbarNav>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item" style={{ width: 'max-content' }}>
              {
                !user ?
                  <Link className="nav-link" href={'/login'}><MDBIcon fas icon="sign-in-alt" size='lg' fixed />{' '}Iniciar sesión</Link> :
                  <Link className="nav-link" href={'/'} onClick={handleSignOut}><MDBIcon fas icon="sign-in-alt" size='lg' fixed />{' '}Cerrar sesión</Link>
              }
            </li>
          </ul>

          <ul className="navbar-nav d-flex flex-row">
            {/* <!-- Icons --> */}
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                rel="nofollow" target="_blank">
                <MDBIcon fab icon='youtube' />
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="https://www.facebook.com/mdbootstrap" rel="nofollow"
                target="_blank">
                <MDBIcon fab icon='facebook-f' />
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="https://twitter.com/MDBootstrap" rel="nofollow" target="_blank">
                <MDBIcon fab icon='twitter' />
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="https://github.com/mdbootstrap/mdb-ui-kit" rel="nofollow"
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