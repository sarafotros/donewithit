import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import SubmitButton from '../components/SubmitButton';
import AppFormField from '../components/AppFormField';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

export default function LoginScreen() {
	// const [email, setEmail] = useState();
	// const [password, setPassword] = useState();

	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo-red.png')} />
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(value) => console.log(value)}
				validationSchema={validationSchema}
			>
				{() => (
					<>
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
					</>
				)}
			</Formik>
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
