import * as yup from 'yup';

export const userSignupSchema = yup.object().shape({
	email: yup.string().email().required('Dit is een verplicht veld'),
	password: yup
  .string()
	
		.min(6, 'Het paswoord moet minstens 6 characters hebben')
		.required('Dit is een verplicht veld'),
	displayName: yup.string().required('Dit is een verplicht veld'),
});