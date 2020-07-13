import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

const Login = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<h2>Login</h2>
			<div>{process.env.REACT_APP_AUTH0_DOMAIN}</div>
		</Layout>
	);
}

export default Login;