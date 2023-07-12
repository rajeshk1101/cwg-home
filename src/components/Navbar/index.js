import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from "react-redux";
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0();
const Navbar = props => {
const { oidc } = props;
return (
	<>
	{oidc.user ? (
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <a href="#login">
              {oidc.user ? oidc.user.profile.unique_name : ""}
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      ) : null}
	<Nav>
		<Bars />

		<NavMenu>
        <NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/events' activeStyle>
			
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to="/signin">CWG Community</NavBtnLink>
		</NavBtn>
		{ if (isAuthenticated) }
	</Nav>
	</>
);
};
function mapStateToProps(state) {
	return {
	  oidc: state.oidc
	};
  }
  

export default connect(mapStateToProps)(Navbar);
