import React from 'react'
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native';
import AppText from './AppText'
import colors from '../config/colors';
// import Swipeable from 'react-native-gesture-handler/Swipeable';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListItem = ({
	title,
	subTitle,
	image,
	IconComponent,
	onPress,
	renderRightActions,
}) => {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight onPress={onPress} underlayColor={colors.light}>
				<View style={styles.container}>
					{image && <Image style={styles.image} source={image} />}
					{IconComponent}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title}>{title}</AppText>
						{subTitle && <AppText style={styles.subtitle}>{subTitle}</AppText>}
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
		backgroundColor: colors.white
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: 'center',
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 45,
	},
	title: {
		fontWeight: '500',
	},
    subtitle: {
       color: colors.medium
    }
});
