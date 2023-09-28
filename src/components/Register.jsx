import React, { useState } from 'react';
import Swal from "sweetalert2"
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
    MDBIcon,
} from 'mdb-react-ui-kit';
import { useRouter } from "next/navigation"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import firebase from '@/data/Firebase/firebaseAuth'

export default function Register() {
    const [centredModal, setCentredModal] = useState(false);
    const toggleShow = () => setCentredModal(!centredModal);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth(firebase)
    const router = useRouter()

    const handleCreateUser = async () => {
        try {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    Swal.fire(
                        'Done!',
                        `El usuario ${userCredential.user.email} ha sido creado, puedes iniciar sesión ahora`,
                        'success'
                    ).then(() => {
                        toggleShow()
                    })
                }).catch(error => {
                    console.log(error.message)
                    Swal.fire(
                        'Ups!',
                        `Error: ${error.message} Code: ${error.code}`,
                        'error'
                    )
                })
        } catch (error) {
            console.log(error);
            Swal.fire(
                'Ups!',
                `Error: ${error.message}`,
                'error'
            )
        }
    }

    return (
        <>
            <div className='text-center mb-3'>
                <a onClick={toggleShow} style={{ cursor: 'pointer', textDecoration: 'underline' }} className="text-decoration">Registrate aquí</a>
            </div>

            <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBBtn type='button' className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <h3 className='text-center mb-5'>Registrar usuario</h3>

                                <MDBInput
                                    className='mb-4'
                                    type='email'
                                    id='email'
                                    label='Correo electrónico'
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                                <MDBInput
                                    className='mb-4'
                                    type='password'
                                    id='password'
                                    label='Contraseña'
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />


                                <MDBBtn type='button' block className='mb-4' onClick={handleCreateUser}>
                                    Registrarse
                                </MDBBtn>

                                <hr />

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
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}