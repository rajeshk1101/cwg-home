import React, { useState, useEffect } from "react";
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
const url = "/.auth/me";
const [data, setData] = useState([]);

const fetchInfo = () => {
	return fetch(url)
		.then((res) => res.json())
		.then((d) => setData(d))
}
useEffect(() => {
	fetchInfo();
	}, []);
const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
			<NavLink  activeStyle>
				Welcome { data ? data.clientPrincipal.userDetails : 'Test'}
			</NavLink>
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
