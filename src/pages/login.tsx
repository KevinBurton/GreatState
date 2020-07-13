import React from 'react';

const Login = () => {
	return (
		<>
			<h2>Login</h2>
			<div>{process.env.REACT_APP_AUTH0_DOMAIN}</div>
		</>
	);
}

export default Login;