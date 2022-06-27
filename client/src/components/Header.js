import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" >
                <Container className="justify-content-center">
                <Navbar.Brand>"That Simple Task Manager Web App" </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
