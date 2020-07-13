import React from 'react';
import Location from '../components/Location';

import Layout from "../components/layout"
import SEO from "../components/seo"

const center = {
	lat: 43.035419,
	lng: -89.380748
};

const Dropin = () => {
	return (
		<Layout>
		<SEO title="Home" />
			<h6>COMING TO TOWN ? WE LOVE VISITORS!</h6>
			<p>
				We would love to be a part of your Madison experience by having you drop -in while in town.
				We are literally walking distance from the Alliant Energy Center and only a few minutes from
				Downtown.
			</p>
			<p>
				From Downtown / the Alliant Energy Center, take John Nolen to Rimrock Road over the highway
				and we are on your right next to the Capitol Petrol gas station.
			</p>
			<p>
				From the beltline, take Rimrock Exit South, we are on your right next to the Capitol Petrol
				gas station.
			</p>
			<p>
				For all new drop - ins, please show up 10 - 15 minutes prior to class so we can get you all
				set before your workout.
			</p>
			<p>
				If you have any questions please call 608 - 338 - 8016
			</p>
			<Location center={center} />
		</Layout>
	);
}

export default Dropin;