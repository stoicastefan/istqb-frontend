import { useEffect } from "react"
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router-dom"

export function Navbar() {

    const navigate = useNavigate();

    function isLoggedIn() {
        let username = localStorage.getItem("username")
        console.log(username)

        if (username){
            return (
                <>
                {username}
                <Nav className="">
                        <Nav.Link to="/login" onClick={disconnectUser} as={NavLink}>Disconnect</Nav.Link>
                </Nav>
                </>
            )
        } else {
            return (
                <Nav className="">
                    <Nav.Link to="/login" as={NavLink}>Login</Nav.Link>
                    <Nav.Link to="/sign_up" as={NavLink}>Sign up</Nav.Link>
                </Nav>
            )
        }
    }
    
    function disconnectUser() {
        localStorage.setItem("username", "")
        navigate('/login');
        window.location.reload();
    }
    
    return (
        <NavbarBs sticky="top"  className="bg-white shadow-sm mb-3">
            <NavbarBs.Brand style={{height: '50px'}} href="/"><img className="mh-100" style={{}} src="./src/assets/learning_logo.png" alt="" /></NavbarBs.Brand>
            <Container className="justify-content-end">
                {isLoggedIn()}
            </Container>
            
        </NavbarBs>
    )
}