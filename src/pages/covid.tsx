import React from 'react';

import CovidMenu from "../components/Covid/CovidMenu";
import Layout from "../components/layout"
import SEO from "../components/seo";

import AzureLogging from '../utils/AzureLogging';

const CovidPage = () => {
	const loggingIstance = new AzureLogging('48512397-216e-49f7-988c-90ac161bf838',
											'GreatStateLogging',
											'qJOZAj/rE/FrwSDQvHqDKH/TSjHWqjTpFCAZdhriVhZhip1FNs5YF9MiJNS34I8cTgfyjAqtchYHtWvKKrPv9g==');
	loggingIstance.Log('Covid');
	return (
		<Layout>
			<SEO title="Home" />
			<CovidMenu/>
		</Layout>
	);
}

export default CovidPage;