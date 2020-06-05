import React from 'react'
import { StyleSheet, FlatList } from 'react-native';

import Screen from '../components/Screen'
import CardComponent from '../components/CardComponent';
import colors from '../config/colors';


const listings = [
	{
		id: 1,
		title: 'Red Jacket for sale',
		price: '$100',
		image: require('../assets/jacket.jpg'),
	},
	{
		id: 2,
		title: 'Couch in good condition',
		price: '$1000',
		image: require('../assets/couch.jpg'),
	},
];

const ListingsScreen = () => {
    return (
			<Screen style={styles.screen}>
				<FlatList
					data={listings}
					keyExtractor={(listing) => listing.id.toString()}
					renderItem={({ item }) => (
						<CardComponent
							title={item.title}
							subTile={'$' + item.price}
							image={item.image}
						/>
					)}
				/>
			</Screen>
		);
}

export default ListingsScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})
