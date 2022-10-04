import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Content } from './component/content';
import { Header } from './component/header';
import { Footer } from './component/footer';
import Navbar from 'react-bootstrap/Navbar'; //imports nav bar 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'; // imports nav system
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; //imports browser routing for different pages, and shows component through different url



class App extends React.Component{ 

  render(){ 
    return(
      // Router to help navigate components and display on different pages
     //Nav bar below
     <Router> 
      <div className="App">
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes> 
      {/* targets content on different pages through componets, uses path to page and targets content on page and dispalys to App.js  */}
        <Route path='/' element ={<Content></Content>}></Route> 
        <Route path='/read' element={<Header></Header>}></Route>
        <Route path='/create' element={<Footer></Footer>}></Route>
        
      </Routes>
        {/* <Header></Header>
        <Content></Content>
        <Footer></Footer> */}
      </div>
      </Router> 
    );
  }
}

export default App;
