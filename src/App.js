import React from 'react';
import { MemoryRouter, Switch, Route, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Footer from 'react-bootstrap/ModalFooter';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import './App.scss';
import HelloPagi from './components/Pagination/Pagination';
import NewCard from './components/Cards/Cards';

const App = () => (
  <>
  {/* sposób na przyklejenie od góry paska menu, który zniknie po scrollowaniu w dół */}
  <header>
  {/* <Navbar className="navbar-expand-lg sticky-top navbar-light bg-light">
  <Container>
    <a href="#" className="navbar-brand">
      LukaShop
    </a>
    <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </Button>
    <div className="collapse navbar-collapse justify-content-end" id="#navbarSupportedContent1">
      <ul className="navbar-nav navbar-right">
        <li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Best</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
      </ul>
    </div>
  </Container>
  </Navbar> */}
  <Navbar className="navbar-expand-lg sticky-top bg-light navbar-light">
  <Container>
    <Navbar.Brand href="#home">Gooood Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto navbar-collapse justify-content-end" defaultActiveKey="#home">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#best">Best</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
  </Navbar>
  <Jumbotron>
    <Container>
      <h1 className="display-4">Welcome to Goooood Shop</h1>
      <p className="lead">You can find there a lot of goods</p>
      <Button className="btn btn-lg btn-primary">Click to see</Button>
    </Container>
    
  </Jumbotron>
  </header>
  <Container aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="#">Home page</a>
      </li>
      <li className="breadcrumb-item active">Lorem</li>
    </ol>
  </Container>
  <Container>
  <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col md={4}>
    <h3 className="mb-3">Categories</h3>
      <ListGroup>
        <ListGroup.Item action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Link 2
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          Link 3
        </ListGroup.Item>
        <ListGroup.Item action href="#link4">
          Link 4
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col md={8}>
      <Tab.Content className="mt-1">
        <Tab.Pane eventKey="#link1">
        <HelloPagi/>
          <Row>
            <Col lg={4}>
              <NewCard activeclass="active"/>
            </Col>
            <Col lg={4}>
              <NewCard/>
            </Col>
            <Col lg={4}>
              <NewCard/>
            </Col>
            <Col lg={4}>
              <NewCard activeclass="active"/>
            </Col>
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
        <HelloPagi/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. NumLorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi eligendi quidem odit fugiat architecto corrupti vitae id, repellLorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi eligendi quidem odit fugiat architecto corrupti vitae id, repellLorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi eligendi quidem odit fugiat architecto corrupti vitae id, repellat asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?at asperiores ipsam at. Mollitia sequi aut cum autem expm odit fugiat architecto corrupti vitae id, repellLorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi eligendi m m odit fugiat architecto corrupti vitae id, repellLorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi eligendi quidem odit fugiat architecto corrupti vitae id, repellat asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?at asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?at asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?quam, modi Lorem ipsum dolor sit amet, consectetuodit fugiat architecto corrupti vitae id, repellLorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi eligendi quidem odit fugiat architecto corrupti vitae id, repellat asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?at asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?at asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?quam, modi Lorem ipsum dolor sit amet, consectetuquidem odit fugiat architecto corrupti vitae id, repellat asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?at asperiom odit fugiat architecto corrupti vitae id, repellLorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi eligendi quidem odit fugiat architecto corrupti vitae id, repellat asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?at asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?at asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?quam, modi Lorem ipsum dolor sit amet, consectetures ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?at asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?quam, modi Lorem ipsum dolor sit amet, consectetuedita. Minus, quis?at asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?quam, modi Lorem ipsum dolor sit amet, m odit fugiat architecto corrupti vitae id, repellLorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi eligendi quidem odit fugiat architecto corrupti vitae id, repellat asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?at asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?at asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?quam, modi Lorem ipsum dolor sit amet, consectetuconsectetur adipisicing elit. Numquam, modi eligendi quidem odit fugiat architecto corrupti vitae id, repellat asperiores ipsam odit fugiat architecto corrupti vitae id, repellLorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi eligendi quidem odit fugiat architecto corrupti vitae id, repellat asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?at asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?at asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?quam, modi Lorem ipsum dolor sit amet, consectetum at. Mollitia sequi aut cum autem expedita. Minus, quis?eligendi quidem odit fugiat architecto corrupti vitaLorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi eligendi quidem odit fugiat architecto corrupti vitae id, repellat asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?e id, repellat asperiores ipsam at. Mollitia sequi aut cum autem expedita. Minus, quis?</p>
        </Tab.Pane>
        <Tab.Pane eventKey="#link3">
        <HelloPagi/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi eligendi quidem odit fugiat architecto corrupti vitae id, repellat asperiores ipsam at. Mollitia s amet, consectetur adipisicing elit. Numquam, modi eligendi quidem odit fugiat architecto corrupti vitae id, repellat asperiores ipsam at. Mollitiaequi aut cum autem expedita. Minus, quis?</p>
        </Tab.Pane>
        <Tab.Pane eventKey="#link4">
        <HelloPagi/>
          <p>Lorem ipsum dolor sit amet, consectetur adip amet, consectetur adipisicing elit. Numquam, modi eligendi quidem odit fugiat architecto corrupti vitae id, repellat asperiores ipsam at. Mollitiaisicing elit. Numquam, modi eligendi quidem odit fugiat architecto corrupti vitae id, repellat asperiores ipsam at. Mollitia sequi a amet, consectetur adipisicing elit. Numquam, modi eligendi quidem odit fugiat architecto corrupti vitae id, repellat asperiores ipsam at. Mollitiaut cum autem expedita. Minus, quis?</p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</Container>
<Footer className="bg-secondary text-white px-5">
  <Row>
    <Col className="pl-5" md={8}>
      <h3>Gooood Shop</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, voluptate saepe dignissimos nulla, ab dolore eius at expedita, minima commodi ducimus laudantium! Soluta sed veritatis nobis error ipsa magni vero.
      Laborum in natus delectus</p>
      </Col>
    <Col md={4}>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Subscribe!!!</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>
    </Col>
  </Row>
</Footer>
  </>
  
);

export default App;
