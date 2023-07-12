import React from 'react';
import './App.css';
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
	<h1>Welcome to CWG</h1>
	<div>
		<a class="cus-button" href="/signin">CWG Community</a>
		<a class="cus-button" href="/logout">Logout</a>
	</div>
	</div>
);
};

export default Home;
