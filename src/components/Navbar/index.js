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
			<NavBtnLink to='/logout'>Logout</NavBtnLink> 
		</NavMenu>
		<NavBtn>
			<NavBtnLink to="/signin">CWG Community</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};
export default Navbar;
