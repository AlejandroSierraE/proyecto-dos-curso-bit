import React from 'react';
import Link from 'next/link';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardLink,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function CardList({ imgUrl, title, description, characteristicOne, characteristicTwo, characteristicThree, urlQuieroEste, urlCustom }) {
    
    return (
        <>
            <MDBCard>
                <MDBCardImage position='top' alt={title} src={imgUrl} />
                <MDBCardBody>
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText>
                        {description}
                    </MDBCardText>
                </MDBCardBody>
                <MDBListGroup className='list-group list-group-light list-group-small'>
                    <MDBListGroupItem className='list-group-item px-4'>
                        <i className="fas fa-check-circle me-2 text-success"></i>{characteristicOne}
                    </MDBListGroupItem>
                    <MDBListGroupItem className='list-group-item px-4'>
                        <i className="fas fa-check-circle me-2 text-success"></i>{characteristicTwo}
                    </MDBListGroupItem>
                    <MDBListGroupItem className='list-group-item px-4'>
                        <i className="fas fa-check-circle me-2 text-success"></i>{characteristicThree}
                    </MDBListGroupItem>
                </MDBListGroup>
                <MDBCardBody>
                    <Link href={urlQuieroEste} className='card-link'>
                        <MDBCardLink href='#'>ver más</MDBCardLink>
                    </Link>
                    <Link href={urlCustom} className='card-link'>
                        <MDBCardLink href='#'>Personalizar</MDBCardLink>
                    </Link>
                </MDBCardBody>
            </MDBCard>
        </>
    );
}