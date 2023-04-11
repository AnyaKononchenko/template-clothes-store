import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import SearchBar from "./SearchBar";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid='md'>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <LinkContainer to='/catalog'>
              <Nav.Link>Catalog</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/catalog/accessories' >
              <Nav.Link>Accessories</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/catalog/bagsAndWallets'>
              <Nav.Link>Bags &#38; Wallets</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/catalog/sale'>
              <Nav.Link>Sale</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/catalog/new'>
              <Nav.Link>New Arrivals</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/locations'>
              <Nav.Link>Shops</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <SearchBar />
      </Container>
    </Navbar>
  );
};

export default Navigation;
