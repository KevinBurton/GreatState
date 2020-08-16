import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

import './Schedule.css';

export const PureSchedule = () => {
	return (
		<>
			<h2>CLASS SCHEDULE</h2>
			<p>
				We ask every new athlete (including DROP-INs!) to contact us before coming to their
				first class. (To avoid having trainers teaching empty classes, we have them come in
				only when we know members will be there. So, to avoid coming to a locked up box,
				RESERVE your class or CALL us the day before you intend to come in!)
			</p>
			<h2>NEW TO CROSSFIT?</h2>
			<p>
				Contact us to schedule your first one-on-one Foundations class.
			</p>
			<div className="container">
				<img alt="Classes" src="assets/img/classes.jpg" />
			</div>
			<p style={{ textAlign: 'center'}}>
				<a href="https://app.wodify.com/WodifyAdminTheme/Login.aspx" target="_blank" rel="noopener noreferrer">
					<br/>
					<img className="wp-image-477 aligncenter" src="https://secureservercdn.net/198.71.233.104/654.510.myftpupload.com/wp-content/uploads/2017/07/image001.jpg" alt="" width="296" height="93" srcSet="https://secureservercdn.net/198.71.233.104/654.510.myftpupload.com/wp-content/uploads/2017/07/image001.jpg 385w, https://secureservercdn.net/198.71.233.104/654.510.myftpupload.com/wp-content/uploads/2017/07/image001-300x94.jpg 300w" sizes="(max-width: 296px) 100vw, 296px"/>
				</a>
			</p>
			<p style={{ textAlign: 'center' }}>
				(If you have Wodify , you must be logged out or logged into your account linked to Great State
				CrossFit to see our box’s class schedule below.)
			</p>
			<p style={{ textAlign: 'center' }}>
				Check out our <a href="https://greatstatecrossfit.com/pricing/">Pricing</a>&nbsp;page
				to purchase a membership!
			</p>
			<div>
				<div>
					<iframe title="Schedule" src="https://app.wodify.com/Schedule/PublicCalendarListView.aspx?tenant=5463" width="800" height="800">
					</iframe>
				</div>
			</div>
		</>
	);
}

const Schedule = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<PureSchedule/>	
		</Layout>
	);
}

export default Schedule;