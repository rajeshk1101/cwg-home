import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const {  user} = useAuth0();

const Home = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh'
	}}
	>
	<h1>Welcome to CWG {user.name}</h1>
	</div>
);
};

export default Home;
