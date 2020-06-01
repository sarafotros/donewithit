import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

export default function AppButton({ title, onPress, color= 'primary'}) {
	return (
		<TouchableOpacity style={[styles.button, {backgroundColor:colors[color]}]} onPress={onPress}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		width: '100%',
		padding: 15,
		backgroundColor: colors.primary,
		justifyContent: 'center',
		alignItems: 'center',
        borderRadius: 25,
        marginVertical: 10,
	},
	buttonText: {
		color: colors.white,
		fontSize: 18,
		textAlign: 'center',
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
});
