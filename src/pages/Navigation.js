import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar.nav' />
                <Navbar.Collapse id='responsive-navbar-nav'/>
                    <Nav>
                        <Nav.Link href='/'>Login</Nav.Link>
                        <Nav.Link href='/conversation'>Conversation</Nav.Link>
                        <Nav.Link href='/listeOffres'>ListeOffres</Nav.Link>
                        <Nav.Link href='/companies'>Companies</Nav.Link>
                        <Nav.Link href='/candidats'>Candidats</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Navigation;
