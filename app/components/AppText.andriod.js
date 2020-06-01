import React from 'react';
import { StyleSheet, Text } from 'react-native';

const AppText = ({ children }) => {
	return;
	<Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		color: 'tomato',
		fontSize: 20,
		fontFamily: 'Roboto',
	},
});

export default AppText;
