import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink path="/signin" element={<About />} >CWG Community</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

function About() {
    window.location.href = 'https://cabinetworksgroup--itedev.sandbox.my.site.com/test';
    return null;
  }

export default Navbar;
