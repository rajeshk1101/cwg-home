import React, { useState, useEffect } from "react";
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
const Navbar = () => {	
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
	return (
		<>
		<Nav>
			<Bars />
			<NavMenu>
				<NavLink  >
					Welcome {data ? data.clientPrincipal ? data.clientPrincipal.userDetails : 'No Claim Priciple' : 'No data' }
				</NavLink>
				<NavLink to='/' >
					Home
				</NavLink>
				<NavLink to='/events' >
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
