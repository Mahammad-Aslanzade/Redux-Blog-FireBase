import React from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';

const BlogDetails = ({ blogValue }) => {

    const { url } = useParams();
    const blogDetails = blogValue.find(b => b.id == url);
    return (
        <div className='py-5 container'>
            <h3 className='text-dark py-3'>{blogDetails.title}</h3>
            <div className="col-6">
                <img className='w-100' src={blogDetails.img} alt="" />
            </div>
            <p className='text-secondary py-4'>{blogDetails.desc}</p>

            <LinkContainer to='/blog'>
                <Button variant='dark'>
                    Back to Blog Page
                </Button>
            </LinkContainer>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        blogValue: state
    }
}

export default connect(mapStateToProps)(BlogDetails)