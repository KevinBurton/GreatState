import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

export const PureLogin = () => {
	return (
		<>
			<h2>Login</h2>
			<div>{process.env.REACT_APP_AUTH0_DOMAIN}</div>
		</>
	);
}
const Login = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<PureLogin/>
		</Layout>
	);
}

export default Login;