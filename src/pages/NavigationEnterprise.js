import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationEnterprise = () => {
    return (
        <>
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Collapse id='responsive-navbar-nav'/>
                    <Nav>
                        <Nav.Link href='/'>Login</Nav.Link>
                        <Nav.Link href='/listeconversations'>Liste Conversations</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default NavigationEnterprise;
