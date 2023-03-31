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
                < >
                <Nav className=" rounded bg-secondary bg-gradient">
                    <img className="p-1" src="..\src\assets\user2.png" alt="" style={{height: '42px'}}/>
                    <span className="text-light fw-bolder nav-link">{username}</span>
                </Nav>
                <Nav className="ms-2">
                        <Nav.Link className="fw-bolder text-light btn bg-danger" to="/login" onClick={disconnectUser} as={NavLink}>Disconnect</Nav.Link>
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
            <NavbarBs.Brand style={{height: '70px'}} href="/"><img className="mh-100" style={{}} src="./src/assets/learning_logo.png" alt="" /></NavbarBs.Brand>
            <Container style={{}} className="mw-100 justify-content-end">
                {isLoggedIn()}
            </Container>
            
        </NavbarBs>
    )
}