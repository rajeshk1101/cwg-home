import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
height: 100%;
width: 25%;
position: fixed;
z-index: 1;
top: 0;
left: 0;
background-color: #006594;
transition: .5s ease;
overflow-x: hidden;
padding-top: 20px;
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
`;

export const NavLink = styled(Link)`
color: white;
display: block;
text-decoration: none;
border-radius: .25rem;
background: transparent;
padding: 0.5rem;
margin: 4rem;
transition: background .05s linear;
cursor: pointer;
&.active :hover {
	box-shadow: inset 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 0 3px #0070d2;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: block;
`;

export const NavBtn = styled.nav`
display: ;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
