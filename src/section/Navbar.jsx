import React from "react";
import Container from "../components/Container";
import logo from "../assets/logo.png";
import Flex from "../components/Flex";
import { NavLink } from "react-router";

let menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Me",
    link: "/AboutMe",
  },
  {
    name: "Protfolio",
    link: "/Protfolio",
  },
  {
    name: "Contact",
    link: "/Contact",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-primary_bg py-4">
      <Container>
        <Flex className="gap-[219px] items-center">
          <div>
            <img src={logo} />
          </div>

          <menu>
            <ul className="flex gap-[145px] text-primary_text">
              {menu.map((item, index) => (
                <li key={item.name}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? "navItem activeNavItem" : "navItem"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </menu>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
