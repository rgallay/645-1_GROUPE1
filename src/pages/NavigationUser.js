import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationUser = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Collapse id='responsive-navbar-nav'/>
                    <Nav>
                        <Nav.Link href='/listeconversations'>Conversations</Nav.Link>
                        <Nav.Link href='/listeOffres'>Offres</Nav.Link>
                        <Nav.Link href='/'>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationUser;