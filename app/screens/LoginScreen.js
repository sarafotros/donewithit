import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';

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
				{({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
					<>
						<AppTextInput
							icon="email"
							placeholder="Email"
							autoCapitalize="none"
							autoCorrect={false}
							onBlur={() => setFieldTouched('email')}
							onChangeText={handleChange('email')}
							keyboardType="email-address"
							textContentType="emailAddress"
						/>
						<ErrorMessage error={errors.email} visible={touched.email} />
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							placeholder="Password"
							icon="lock"
							secureTextEntry
							onBlur={() => setFieldTouched('password')}
							textContentType="password"
							onChangeText={handleChange('password')}
						/>
						<ErrorMessage error={errors.password} visible={touched.password} />
						<AppButton title="Login" onPress={handleSubmit} />
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
