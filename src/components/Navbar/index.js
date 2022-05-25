import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { MenuIcon, Nav, NavbarContainer, NavItem, NavLink, NavLogo, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              Future Lab
          </NavLogo>
            <MenuIcon onClick={toggle}>
              <FaBars />
            </MenuIcon>
            <NavMenu>
            <NavItem>
                <NavLink to='utility' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Utility</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='marketplace' smooth={true} duration={500} spy={true} exact='true' offset={-80} >Marketplace</NavLink>
              </NavItem>
           
              <NavItem>
                <NavLink to='community' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Community</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLink>
              </NavItem> */}
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Wait list</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
