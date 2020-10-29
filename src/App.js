import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

import './App.scss';

const App = () => (
  <>
  <Navbar className="navbar-expand-lg sticky-top navbar-light bg-light">
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
  </Navbar>
  <Jumbotron></Jumbotron>
  </>
  
);

export default App;
