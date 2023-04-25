import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const SingleCard = ({ img, title, desc, id }) => {
    return (
        <Col xs={12} sm={6} md={4}>
            <div className="card">
                <div className="blog-image">
                    <img src={img} alt="" />
                </div>

                <Container>
                    <div className="blog-body">
                        <p className='title'>{title}</p>

                        <p className='text'>
                            {desc}...
                        </p>
                        <LinkContainer to={`/blog/${id}`}>
                            <p className='moreBtn'>View More</p>
                        </LinkContainer>
                    </div>
                </Container>
            </div>
        </Col>
    )
}
