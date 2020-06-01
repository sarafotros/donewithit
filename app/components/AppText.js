import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

const AppText = ({children}) => {
    return
    <Text style={styles.text}>
       {children} 
    </Text>;
};

...Platform.select({
	ios: {
		fontSize: 18,
		fontFamily: 'Avenir',
	},
	android: {
		fontSize: 20,
		fontFamily: 'Roboto',
	},
});


const styles = StyleSheet.create({
    text: {
        color: 'tomato',
        ...Platform.select({
	ios: {
		fontSize: 20,
		fontFamily: 'Avenir',
	},
	android: {
		fontSize: 18,
		fontFamily: 'Roboto',
	},
});
    }
});
export default AppText;