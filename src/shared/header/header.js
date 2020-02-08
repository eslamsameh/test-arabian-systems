import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { Title, Thing } from './header-styles';

export default class Header extends Component {
    renderNav(path, title) {
        return (
            <Thing>
                <Nav.Link>
                    <NavLink className="nav" to={path} activeClassName="active-link">
                        <Title>{title}</Title>
                    </NavLink>
                </Nav.Link>
            </Thing>
        )
    }


    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">{this.renderNav('/todo', 'Todos')}{this.renderNav('/posts', 'Posts')}</Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}
