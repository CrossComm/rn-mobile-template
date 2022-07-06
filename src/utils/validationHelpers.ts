import { Dispatch, SetStateAction } from 'react';

export const isValidEmail = (email: string) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	);
};

export const isValidPhoneNumber = (phone: string) => {
	return phone.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
};

export type PasswordError = {
  label: string;
  errorLevel: 'alert' | 'warning' | 'informative' | 'none';
};

export const checkPassword = (
	pass: string,
	checkPass: string,
	setError: Dispatch<SetStateAction<PasswordError>>,
) => {
	if (pass.length < 8) {
		setError({
			label: 'Password must by 8 characters long',
			errorLevel: 'informative',
		});
		return;
	}

	if (!!checkPass && pass !== checkPass) {
		setError({
			label: 'Passwords do not match',
			errorLevel: 'alert',
		});
		return;
	}
	setError({
		label: '',
		errorLevel: 'none',
	});
};
