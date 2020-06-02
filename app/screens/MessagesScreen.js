import React, { useState }from 'react';
import {
	StyleSheet,
	SafeAreaView,
	Platform,
	StatusBar,
	FlatList,
	View,
} from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
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

	const [messages, setMessages] = useState(initialMessages)
	const [refreshing, useRefreshing] = useState(false);

	const handleDelete = (message) => {
		//delete message from messages array
		 setMessages(messages.filter((m) => m.id !== message.id))
	}
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
						onPress={() => console.log('Message Selected', item)}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 1,
							title: 'T1',
							description: 'D1',
							image: require('../assets/sara.jpg'),
						},
					]);
				}}
			/>
		</Screen>
	);
};

export default MessagesScreen;

const styles = StyleSheet.create({
	// screen: {
	// paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
	// 	paddingTop: Constance.statusBarHeight,
	// },
});
