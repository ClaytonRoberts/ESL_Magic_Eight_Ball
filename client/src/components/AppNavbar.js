import React, { Component } from 'react';
import{
    Collapse, 
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';


class AppNavbar extends Component {
    state = {
            isOpen: false,
            showMenu: false
            
        }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    
    render() {
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand style={{display: "table-cell"}} href="/" target="_blank">ESL Magic Eight Ball</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink onClick={()=> window.open("https://www.youtube.com/watch?v=WSaS17CSS4c", "_blank")}>
                                        How to...
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink onClick={()=> window.open("https://en.wikipedia.org/wiki/Magic_8-Ball#Possible_answers", "_blank")}>
                                        Answers...
                                    </NavLink>
                                </NavItem>
                               
                                <NavItem>
                                    <NavLink onClick={()=> window.open("https://www.linkedin.com/in/636c6179746f6e", "_blank")}>
                                        Clayton's Linkedin
                                    </NavLink>
                                </NavItem>
                                
                            </Nav>
                        </Collapse>    
                    </Container>
                </Navbar>
            </div>
        );
    }
}



export default AppNavbar;