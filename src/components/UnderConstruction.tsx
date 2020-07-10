import React, { useState } from 'react';
import {
	FormControl,
	Input,
	InputAdornment,
	IconButton,
	InputLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Send from '@material-ui/icons/Send';

import Countdown from './Countdown';

import './UnderConstruction.css';

const useStyle = makeStyles((theme) => ({
	root: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200
	},
	iconColor: {
		color: theme.palette.common.black
    }
}));

const UnderConstruction = ({ onSubmit }) => {
	const classes = useStyle();
	const [email, setEmail] = useState('');
	return (
		<>
			<h2>Under Construction</h2>
			<Countdown timeTillDate="07 08 2020, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
			<br />
			<FormControl
				className={classes.root}
				data-testid="notification-form"
			>
				<InputLabel htmlFor="email-notification" data-testid="email-label">
					Enter Email
				</InputLabel>
				<Input
					id="email-notification"
					type="text"
					value={email}
					onChange={(e: React.FormEvent<EventTarget>) => {
						let target = e.target as HTMLInputElement;
						setEmail(target.value);
					}}
					inputProps={{
						'data-testid': 'email-notification'
					}}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="submit email"
								onClick={onSubmit}
								data-testid="notifications-form-submit"
							>
								<Send className={classes.iconColor} />
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>
		</>
	);
}

export default UnderConstruction;