import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import colors from '../config/colors'
import AppText from './AppText';


const CardComponent = ({title, subTitle, image}) => {
    return (
			<View style={styles.card}>
				<Image source={image} style={styles.image} />
				<View style={styles.detailsContainer}>
					<AppText style={styles.title}>{title}</AppText>
					<AppText style={styles.subtitle}>{subTitle}</AppText>
				</View>
			</View>
		);
}

export default CardComponent

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
        marginBottom: 20,
        overflow:'hidden'
	},
	image: {
		width: '100%',
		height: 200,
	},
	detailsContainer: {
		padding: 20,
	},
	title: {
		marginBottom: 7,
	},
    subtitle: {
        color: colors.secondary,
        fontWeight:'bold'
    }
});
