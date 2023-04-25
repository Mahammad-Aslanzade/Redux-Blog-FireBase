import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import logo from "../assets/image/blog-icon-dark-background-simple-vector-116865750-1.png"
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar className='navbar-dark py-3' bg="dark" expand="lg">
        <Container>

          <LinkContainer to='/'>
            <Navbar.Brand>
              <img id='logoPhoto' src={logo} alt="" />
            </Navbar.Brand>
          </LinkContainer>


          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/blog'>
                <Nav.Link>Blog</Nav.Link>
              </LinkContainer>


            </Nav>

            <div className="adminBtnFrame">
              <LinkContainer to='/adminAuth'>
                <Button variant='secondary'>Admin Dashboard</Button>
              </LinkContainer>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header