'use client'
import React, { useState } from 'react'
import Register from '@/components/Register'
import firebase from '@/data/Firebase/firebaseAuth'
import { useRouter } from 'next/navigation';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Swal from "sweetalert2"
import {
   MDBContainer,
   MDBIcon,
   MDBInput,
   MDBBtn,
} from 'mdb-react-ui-kit';

import '@/app/login/login.css'

export default function Login() {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const auth = getAuth(firebase)
   const router = useRouter()

   const handleLogin = async () => {

      signInWithEmailAndPassword(auth, email, password)
         .then((result) => {
            router.push('/')
         }).catch(error => {
            console.error(`Error: ${error.message} Code: ${error.code}`)
            switch (error.code) {
               case "auth/invalid-email":
                  Swal.fire(
                     'Ups!',
                     `Error: Autenticación/correo electrónico no válido.`,
                     'error'
                  )
                  break;
               case "auth/missing-password":
                  Swal.fire(
                     'Ups!',
                     `Error: La contraseña no puede estar vacía.`,
                     'error'
                  )
                  break;
               case "auth/invalid-email":
                  Swal.fire(
                     'Ups!',
                     `Error: El correo que intenta ingresar no es permitido.`,
                     'error'
                  )
                  break;
               case "auth/missing-email":
                  Swal.fire(
                     'Ups!',
                     `Error: El correo no puede estar vacío.`,
                     'error'
                  )
                  break;
               case "auth/invalid-login-credentials":
                  Swal.fire(
                     'Ups!',
                     `Error: Autenticación/credenciales de inicio de sesión no válidas.`,
                     'error'
                  )
                  break;
               case "auth/too-many-requests":
                  Swal.fire(
                     'Ups!',
                     `Error: El acceso a esta cuenta se ha deshabilitado temporalmente debido a muchos intentos fallidos de inicio de sesión. Puedes restaurarlo inmediatamente restableciendo tu contraseña o puedes volver a intentarlo más tarde.`,
                     'error'
                  )
                  break;



               default:
                  console.error(`Error: ${error.message} Code: ${error.code}`)
                  break;
            }
         })

   }

   return (
      <MDBContainer fluid className='mt-5 mb-5'>
         <section>
            <div className='px-4 py-5 px-md-5 text-center text-lg-start' style={{ backgroundColor: 'hsl(0, 0%, 96%)' }}>
               <div className='container'>
                  <div className='row gx-lg-5 align-items-center'>
                     <div className='col-lg-6 mb-5 mb-lg-0'>
                        <h1 className='my-5 display-3 fw-bold ls-tight'>
                           La mejor oferta <br />
                           <span className='text-primary'>para tu compra</span>
                        </h1>
                        <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                           Explora una selección exclusiva de ofertas imbatibles diseñadas
                           especialmente para satisfacer tu deseo de poseer un carro deportivo
                           de alto rendimiento. No pierdas esta ocasión única de conducir
                           la adrenalina y el lujo en un solo paquete. ¡Haz tus sueños realidad hoy mismo
                           con nuestras irresistibles ofertas en carros deportivos!
                        </p>
                     </div>

                     <div className='col-lg-6 mb-5 mb-lg-0'>
                        <div className='card'>
                           <div className='card-body py-5 px-md-5'>
                              <form>
                                 <h2 className='text-center m-5'>Inicio de sesión</h2>

                                 <MDBInput
                                    className='mb-4'
                                    type='email'
                                    id='email2'
                                    label='Correo electrónico'
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                 />
                                 <MDBInput
                                    className='mb-4'
                                    type='password'
                                    id='password2'
                                    label='Contraseña'
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                 />


                                 <MDBBtn type='button' block className='mb-4' onClick={handleLogin}>
                                    Iniciar sesión
                                 </MDBBtn>

                                 <hr />

                                 <Register></Register>

                                 <div className='text-center'>
                                    <p>o inicia sesión con:</p>
                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                       <MDBIcon fab icon='facebook-f' />
                                    </MDBBtn>

                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                       <MDBIcon fab icon='google' />
                                    </MDBBtn>

                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                       <MDBIcon fab icon='twitter' />
                                    </MDBBtn>

                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                       <MDBIcon fab icon='github' />
                                    </MDBBtn>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </MDBContainer>
   )
}
