import React from 'react';
import {
	TextField,
	Button,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { useForm, Controller } from 'react-hook-form';

const useStyles = makeStyles((theme) =>
	createStyles({
		invalidInput: {
			'& ': {
				border: "red solid 2px",
				color: "red",
				fontSize: "12px"
			}
		},
		root: {
			'& .MuiTextField-root': {
				margin: theme.spacing(1),
				width: '25ch',
			},
		},
	}),
);

const GettingStarted = ({ onSubmit }) => {
	const classes = useStyles();

	const { handleSubmit, control, errors } = useForm({
		mode: 'onBlur',
		defaultValues: {
			name: "Kevin",
			phone: "16083588015",
			email: "rkevinburton@charter.net",
			comments: "Note"
		}
	});

	return (
		<>
			<h6>Getting Started</h6>
			<p>
				Have questions ? Give us a call or fill out the below.We’d be happy to answer any questions.
			</p>
			<form
				className={classes.root}
				data-testid="getting-started-form"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div style={{ width: '400px' }}>
					<div style={{ width: '100%'}}>
						<Controller as={<TextField
							label="Name"
							id="name"
							name="name"
							type="text"
							placeholder="Name"
							inputProps={{
								'data-testid': 'name'
							}}
						/>} name="name" rules={{ required: 'Name is required' }} control={control}
						/>
						{errors.name && <span className={classes.invalidInput} role="alert">{errors?.name?.message}</span>}
					</div>
					<div style={{ width: '100%' }}>
						<Controller as={<TextField
							label="Email"
							id="email"
							name="email"
							type="text"
							placeholder="Email"
							inputProps={{
								'data-testid': 'email'
							}}
						/>} name="email" rules={{ required: 'Email is required', pattern: { value: /^\w+[\w-.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/i, message: 'Invalid email format' } }} control={control}
						/>
						{errors.email && <span className={classes.invalidInput} role="alert">{errors?.email?.message}</span>}
					</div>
					<div style={{ width: '100%' }}>
						<Controller as={<TextField
							label="Phone"
							id="phone"
							name="phone"
							type="text"
							placeholder="eg.15556667890"
							inputProps={{
								'data-testid': 'phone'
							}}
						/>} name="phone" rules={{ pattern: { value: /\d{11}/, message: 'Invalid phone format' } }} control={control}
						/>
						{errors.phone && <span className={classes.invalidInput} role="alert">{errors?.phone?.message}</span>}
					</div>
					<div style={{ width: '100%' }}>
						<Controller as={<TextField
							label="Comments"
							id="comments"
							name="comments"
							type="text"
							placeholder="Comments"
							rows={6}
							multiline
							inputProps={{
								'data-testid': 'comments'
							}}
						/>} name="comments" control={control}
						/>
					</div>
				</div>
				{/**
				<div style={{ width: '304px', height: '78px' }}>
					<div>
						<iframe src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LdpxioUAAAAAL-qWl3txfd69EfgN7DvMi5Bajcr&amp;co=aHR0cHM6Ly9ncmVhdHN0YXRlY3Jvc3NmaXQuY29tOjQ0Mw..&amp;hl=en&amp;v=NMoy4HgGiLr5NAQaEQa2ho8X&amp;size=normal&amp;cb=z9qrja463gye" width="304" height="78" role="presentation" name="a-z4rnstfanz2a" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox">
						</iframe>
					</div>
					<textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none'}}>
					</textarea>
				</div>
				**/}
				<Button
					type="submit"
					aria-label="submit getting-started-form"
					variant="contained"
					color="primary"
					data-testid="getting-started-form-submit-button"
				>
					Submit
				</Button>
			</form>
		</>
	);
}

export default GettingStarted;