import React from 'react';
import { Navbar, Text, Link } from '@nextui-org/react';

const NavBar = () => {
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          TRAILSTRIDE
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline">
        <Navbar.Link href="#styles-shoes" isActive>
          Styles/Shoes
        </Navbar.Link>
        <Navbar.Link href="#about-us">
          About Us
        </Navbar.Link>
        <Navbar.Link href="#subscribe">
          Subscribe
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default NavBar;
