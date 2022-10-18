import styles from '../styles/Nav.module.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Jornal Blog</Navbar.Brand>
          <Nav className="navbarspacing">
            <Nav.Link href="https://jornal-impresso.vercel.app">Home</Nav.Link>
            <Nav.Link href="/Autores">Autores</Nav.Link>
            <Nav.Link href="/Sobre">Sobre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default ColorSchemesExample;