import React from 'react';
import '../App.css';
const Home = () => {
return (
	<div
	style={{
		display: 'grid',
		justifyContent: 'center',
		alignItems: 'center'
	}}
	>
	<h1>Welcome to CWG</h1>
	<div>
		<a class="cus-button" href="/logout">Logout</a>
	</div>
	</div>
);
};

export default Home;
