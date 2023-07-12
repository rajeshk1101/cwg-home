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
			<NavLink to='/' activeStyle>
				Home
			</NavLink>
			<NavLink to='/events' activeStyle>
				Events
			</NavLink>
			{/* Second Nav */}
		</NavMenu>
		<NavBtn>
			<NavBtnLink to="/signin">CWG Community</NavBtnLink>
			<NavBtnLink to='/logout'>Logout</NavBtnLink> 
		</NavBtn>
	</Nav>
	</>
);
};
export default Navbar;
