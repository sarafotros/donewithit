import * as Yup from 'yup';
import React from 'react';
import { StyleSheet, Image } from 'react-native';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

export default function LoginScreen() {
	
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo-red.png')} />
			<AppForm
				initialValues={{ email: '', password: '' }}
				onSubmit={(value) => console.log(value)}
				validationSchema={validationSchema}
			>
				<AppFormField
					icon="email"
					placeholder="Email"
					autoCapitalize="none"
					autoCorrect={false}
					name="email"
					keyboardType="email-address"
					textContentType="emailAddress"
				/>
				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					placeholder="Password"
					name="password"
					icon="lock"
					secureTextEntry
					textContentType="password"
				/>
				<SubmitButton title="Login" />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 50,
	},
});
