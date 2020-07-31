import React, { FC, useState } from 'react';
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
	invalidInput: {
		'& ': {
			border: "red solid 2px",
			color: "red",
			fontSize: "12px",
			width: "250px"
		}
	},
	iconColor: {
		color: theme.palette.common.black
    }
}));

export type NotificationFormData = {
	email: string;
};
type NotificationProps = {
	onSubmit: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
};

const UnderConstruction: FC<NotificationProps> = ({ onSubmit }) => {
	const classes = useStyle();
	const [email, setEmail] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	return (
		<>
			<h2>Under Construction</h2>
			<Countdown timeTillDate="09 01 2020, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
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
								onClick={(e) => {
									onSubmit(e);
									setEnteredEmail(email);
									setEmail('');
								}}
								data-testid="notifications-form-submit"
							>
								<Send className={classes.iconColor} />
							</IconButton>
						</InputAdornment>
					}
				/>
				{enteredEmail.length > 0 && <span className={classes.invalidInput} role="alert">{`'${enteredEmail}' has been entered`}</span>}
			</FormControl>
		</>
	);
}

export default UnderConstruction;