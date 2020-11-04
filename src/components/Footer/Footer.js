import React from 'react';
import styled from 'styled-components';
import Footer from 'react-bootstrap/ModalFooter';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const Styledparagraph = styled.p`
    font-size: 0.9rem;
`;

const SecondFooter = styled.div`
    background-color: hsl(0, 0%, 20%);
    text-align: center;
    color: white;
    height: 60px;
    line-height: 60px;
    padding-bottom: 20px;
`;

const MyFooter = () => {
    return <>
    <Footer className="bg-secondary text-white px-5 mt-5">
    <Row>
      <Col className="pl-5" md={8}>
        <h3>Gooood Shop</h3>
        <Styledparagraph>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, voluptate saepe dignissimos nulla, ab dolore eius at expedita, minima commodi ducimus laudantium! Soluta sed veritatis nobis error ipsa magni vero.
        Laborum in natus delectus</p>
        </Styledparagraph>
        </Col>
      <Col md={4}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Newsletter</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Button className="mt-2">Sign in</Button>
            <Form.Text>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  </Footer>
    <SecondFooter>
        <div className="text-muted">
            <p>Copyright @ Gooood Shop</p>
        </div>
    </SecondFooter>
</>
}

export default MyFooter;