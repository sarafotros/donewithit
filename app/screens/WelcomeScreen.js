import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import AppButton from '../components/AppButton';

export default function WelcomeScreen(props) {
	return (
		<ImageBackground
			blurRadius={5}
			style={styles.background}
			source={require('../assets/background.jpg')}
		>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require('../assets/logo-red.png')} />
				<Text style={styles.tagLine}>Sell What You Don't Need</Text>
			</View>
			<View style={styles.buttonContainer}>
				<AppButton title="login" />
				<AppButton title="Register" color='secondary'/>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	buttonContainer: {
		padding: 20,
		width: '100%',
	},
	registerButton: {
		width: '100%',
		height: 70,
		backgroundColor: '#4ECDC4',
	},
	logo: {
		width: 100,
		height: 100,
	},
	logoContainer: {
		position: 'absolute',
		top: 70,
		alignItems: 'center',
	},
	tagLine: {
		fontSize: 25,
		fontWeight: '600',
		paddingVertical: 20,
	}
});
