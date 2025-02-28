import React from "react";
import Container from "../components/Container";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-primary_bg">
        <Container>
            <div>
                <img src={logo}/>
            </div>
        </Container>
    </nav>
  );
};

export default Navbar;
