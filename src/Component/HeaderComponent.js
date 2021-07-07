import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../toi.css';

const HeaderComponent = () => {
    return (
        <div className="header">
            <Navbar dark expand="md">
                <div className="container">
                    
                    <NavbarBrand className="mr-5 navb headerLogo" href="https://thinkofit.org/indexold.php"><img src='/images/icon_toi.png'   alt='Think of It' /> <span>Think Of It Foundation</span></NavbarBrand>
                    
                    <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-links"  to='https://thinkofit.org/indexold.php'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-links"  to='https://thinkofit.org/TOI_YLP.php'><span className="fas fa-handshake fa-lg"></span> Youth-Led TOI</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-links"  to='#'><span className="fa fa-list fa-lg"></span> Join The Movement</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-links"  to='https://thinkofit.org/Donate-toi.php'><span className="fas fa-donate fa-lg"></span> Donate</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-links"  to='https://thinkofit.org/contact_us.php'><span className="fa fa-address-card fa-lg"></span> Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-links"  to='https://thinkofit.org/signin-TOI.php'><span className="fas fa-sign-in-alt fa-lg"></span> Login</NavLink>
                    </NavItem>
                    
                    </Nav>
                    
                    
                </div>
            </Navbar>
        </div>
    )
}

export default HeaderComponent;
