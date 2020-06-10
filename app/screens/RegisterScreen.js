import React from 'react'
import * as Yup from 'yup';
import { StyleSheet, Text, View } from 'react-native'

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

export default function RegisterScreen() {
    return (
			<Screen style={styles.screen}>
				<AppForm
					initialValues={{ email: '', password: '' }}
					onSubmit={(value) => console.log(value)}
					validationSchema={validationSchema}
				>
					<AppFormField
						icon="account"
						placeholder="Name"
						autoCapitalize="none"
						autoCorrect={false}
						name="name"
					/>
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
    screen: {
        padding: 10,
    }
})
