import React from 'react'
import {
	StyleSheet,
	SafeAreaView,
	Platform,
	StatusBar,
	FlatList,
	View,
} from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'



const messages = [
	{
		id: 1,
		title: 'T1',
		description: 'D1',
		image: require('../assets/sara.jpg'),
	},
	{
		id: 2,
		title: 'T2',
		description: 'D2',
		image: require('../assets/mosh.jpg'),
	},
];

const MessagesScreen = (props) => {
	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(messages) => messages.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={()=> console.log('Message Selected',item)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
			/>
		</Screen>
	);
}

export default MessagesScreen

const styles = StyleSheet.create({
	// screen: {
		// paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
	// 	paddingTop: Constance.statusBarHeight,
	// },
});
