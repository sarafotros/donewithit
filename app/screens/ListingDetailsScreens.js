import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem';

const ListingDetailsScreens = (props) => {
    return (
			<View>
				<Image style={styles.image} source={require('../assets/jacket.jpg')} />
				<View style={styles.detailsContainer}>
					<AppText style={styles.title}>Red Jacket For Sale</AppText>
					<AppText style={styles.price}>$100</AppText>
					<View style={styles.userContainer}>
						<ListItem
							image={require('../assets/sara.jpg')}
							title="Sara Fotros"
							subTitle="5 Listings"
						/>
					</View>
				</View>
			</View>
		);
}

export default ListingDetailsScreens

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300,
	},
	detailsContainer: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
	},
	price: {
		color: colors.secondary,
		fontWeight: 'bold',
		marginVertical: 10,
	},
    userContainer: {
        marginVertical: 40
    }
});
