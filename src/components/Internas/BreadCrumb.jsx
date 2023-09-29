'use client'
import React from 'react'
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBContainer,
} from 'mdb-react-ui-kit';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function BreadCrumb({titulo,rutaUno,rutaDos,rutaTres}) {
    const pathname = usePathname()
    return (
        <>
            <div className='p-5 bg-light mb-4'>
                <MDBContainer id={"containerBread"}>
                    <h1>{titulo}</h1>
                    <MDBBreadcrumb bold>
                        <MDBBreadcrumbItem>
                            <Link className='text-reset' tag={'a'} href={'/'}>
                                {rutaUno}
                            </Link>
                        </MDBBreadcrumbItem>
                        <MDBBreadcrumbItem>
                            <Link className='text-reset' tag={'a'} href={'/'}>
                                {rutaDos}
                            </Link>
                        </MDBBreadcrumbItem>
                        <MDBBreadcrumbItem>
                            <Link className='text-reset' tag={'a'} href={pathname}>
                                <u>{rutaTres}</u>
                            </Link>
                        </MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </MDBContainer>
            </div>
        </>
    )
}
