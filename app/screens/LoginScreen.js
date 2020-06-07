import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Formik } from 'formik';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

export default function LoginScreen() {
	// const [email, setEmail] = useState();
	// const [password, setPassword] = useState();

	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo-red.png')} />
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(value) => console.log(value)}
			>
				{({ handleChange, handleSubmit }) => (
					<>
						<AppTextInput
							icon="email"
							placeholder="Email"
							autoCapitalize="none"
							autoCorrect={false}
							onChangeText={handleChange('email')}
							keyboardType="email-address"
							textContentType="emailAddress"
						/>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							placeholder="Password"
							icon="lock"
							secureTextEntry
							textContentType="password"
							onChangeText={handleChange('password')}
						/>
						<AppButton
							title="Login"
							onPress={handleSubmit}
						/>
					</>
				)}
			</Formik>
		</Screen>
	);
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 50,
	},
});
