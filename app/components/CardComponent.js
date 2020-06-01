import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import colors from '../config/colors'
import AppText from './AppText';


const CardComponent = ({title, subTitle, image}) => {
    return (
			<View style={styles.card}>
				<Image source={image} style={styles.image} />
				<AppText>{title}</AppText>
				<AppText>{subTitle}</AppText>
			</View>
		);
}

export default CardComponent

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
    }
})
