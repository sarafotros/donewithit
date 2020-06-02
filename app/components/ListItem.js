import React from 'react'
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native';
import AppText from './AppText'
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListItem = ({ title, subTitle, image, onPress, renderRightActions }) => {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight onPress={onPress} underlayColor={colors.light}>
				<View style={styles.container}>
					<Image style={styles.image} source={image} />
					<View>
						<AppText style={styles.title}>{title}</AppText>
						<AppText style={styles.subtitle}>{subTitle}</AppText>
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
};

export default ListItem

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 15,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 45,
		marginRight: 10,
	},
	title: {
		fontWeight: '500',
	},
    subtitle: {
       color: colors.medium
    }
});
