import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import colors from '../config/colors';


export default function ButtonComponent() {
    return (
			<View style={styles.container}>
				<View style={styles.button}>
					<Text style={styles.buttonText}>LOGIN</Text>
				</View>
			</View>
		);
}


const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		width: '100%',
		height: 40,
		backgroundColor: colors.primary,
		justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
	},
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});