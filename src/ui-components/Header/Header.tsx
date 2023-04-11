import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { GiShoppingBag } from "react-icons/gi";
import { LinkContainer } from "react-router-bootstrap";
import Navigation from "./Navbar";

const Header = () => {
  return (
    <Container fluid='md' className='pt-3'>
      <Row>
        <Col lg={2} md={3} xs={4}>
          <div className='text'>Coolity Shop</div>
        </Col>
        <Col></Col>
        <Col lg={1} md={3} xs={3}>
          Sign up
        </Col>
        <LinkContainer to='/cart'>
          <Col lg={1} md={3} xs={3} className='d-flex align-items-center'>
            <GiShoppingBag />
            <Badge bg='none' text='dark'>
              (0)
            </Badge>
          </Col>
        </LinkContainer>
      </Row>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
