import React from 'react';

const Events = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh'
	}}
	>
	<h1>Welcome to CWG Events</h1>
	</div>
);
};
async function getUserInfo() {
    const response = await fetch('/.auth/me');
    console.log('response',response);
    const payload = await response.json();
    console.log(await JSON.stringify(payload));
    const { clientPrincipal } = payload;
    return clientPrincipal;
  }
  
console.log( getUserInfo());
export default Events;
