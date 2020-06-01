import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import AppText from './AppText'
import colors from '../config/colors'

const CardComponent = ({title, subTitle, image}) => {
    return (
			<View style={styles.card}>
				<Image source={require(image)} />
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
    }
})
