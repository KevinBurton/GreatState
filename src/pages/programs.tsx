import React from 'react';
import Button from '@material-ui/core/Button';

const Programs = () => {
	return (
		<>
			<h2>Programs</h2>
			<h6 style={{ textAlign: 'center' }}>CrossFit Group Classes</h6>
			<p>
				CrossFit is a high intensity fitness program that incorporates elements from several types of
				exercises. While CrossFit is meant to be taught in groups, trainers should limit the number in each
				class in order to allow them to focus on each individual athlete as much as possible. A typical class
				will consist of:
			</p>
			<p style={{ marginLeft:'10%', marginRight:'10%'}}>
				a warm-up to get the blood flowing,
				strength training, often times incorporating Olympic lifting, body weight skill work and/or gymnastics,
				a metabolic conditioning segment and closing out with proper recovery methods
			</p>
			<p>
				High intensity workouts result in improved strength, speed, power, coordination and endurance.
				Every workout can be scaled up or down to meet your current ability levels. We do recommend that
				all new members complete a Foundations course in order to ensure they feel ready to take on a
				regular CrossFit class.
			</p>
			<Button style={{ textTransform: 'none' }} variant="contained" color="primary">Purchase a Membership</Button>
			<hr />
			<h6 style={{textAlign: 'center'}}>Athlete Development</h6>
			<p>
				Have a sports team needing strength & conditioning work? Are you a high school or collegiate
				athlete looking for an edge? We can help.

				We will design specific programs to assist in meeting your goals. As a previous competitive swimmer,
				Coach Mike understands the demands an athlete faces (in and out of the pool, ring, court, or field).
				Feel free to contact us to set up an initial consult on how Great State CrossFit can help you or your
				team.
			</p>
			<Button style={{ textTransform: 'none' }} variant="contained" color="primary">Team Membership</Button>
			<hr />
			<h6 style={{ textAlign: 'center' }}>Foundations aka ‘CrossFit 101’</h6>
			<p>
				The Foundations course is designed for those new to Great State CrossFit or who need a
				refresher on the movements taught in each class. This course is meant to help you feel
				completely comfortable in any regularly offered class. We break down the movements,
				step by step, as well as teach you what to expect. We recommend three Foundations courses
				as a prerequisite to joining any other class, unless you can test out or are a current
				CrossFitter.
			</p>
			<Button style={{ textTransform: 'none' }} variant="contained" color="primary">Start Foundations</Button>
			<hr/>
			<h6 style={{ textAlign: 'center' }}>Open Gym</h6>
			<p>
				Our version of recess. Open gym is extra time for you to work on whatever you want – make
				up a missed class, work on new skills, or dedicate the time to what you need to practice
				on. Enjoy the freedom of moving at your own pace. Although open gym is not trainer-led, a
				coach is always on hand to help you get the most out of your time there.
			</p>
			<Button style={{ textTransform: 'none' }} variant="contained" color="primary">Part of your Unlimited Membership at GSCF</Button>
			<hr/>
			<h6 style={{ textAlign: 'center' }}>Personal Training</h6>
			<p>
				In today’s busy world, it’s hard to find the time to get regular exercise. So it’s important
				to make the most of the time you have. We offer a wide range of personal workout programs
				to help you achieve your ideal body. Your personal trainer will develop an exercise regimen
				suited specifically for you, whatever your goals may be.
			</p>
			<Button style={{ textTransform: 'none' }} variant="contained" color="primary">Personal Training Rates - $75/hour</Button>
		</>
	);
}

export default Programs;