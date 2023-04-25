import React from 'react'
import logo from '../assets/image/blog-icon-dark-background-simple-vector-116865750-1.png'
import { LinkContainer } from 'react-router-bootstrap'
const Home = () => {
  return (
    <div>
      <>
        <div className="px-4 py-5 my-5 text-center">
          <img className="d-block mx-auto mb-4 bg-dark" src={logo} alt="" width="100" />
          <h1 className="display-5 fw-bold text-body-emphasis">Home Page</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <LinkContainer to='/blog'>
                <button type="button" className="btn btn-outline-dark btn-lg px-4">Blogs</button>
              </LinkContainer>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default Home