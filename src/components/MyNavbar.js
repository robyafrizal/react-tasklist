import React from "react";

import { Navbar, Nav } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" id="navbar">
        <Navbar.Brand href="#">Roby Afrizal Palmendha</Navbar.Brand>
        <Nav className="mr-auto text-center">
          <Nav.Link href="/">Task List</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
