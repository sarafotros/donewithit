import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const messages = [
	{
		id: 1,
		title: 'T1',
		description: 'D1',
		images: require('../assets/mosh.jpg'),
	},
	{
		id: 2,
		title: 'T2',
		description: 'D2',
		images: require('../assets/mosh.jpg'),
	},
];

const MessagesScreen = () => {
    return (
        <FlatList
            data={messages}
            keyExtractor={messages => messages.id.toString()}
            renderItem={({item})=> <ListItem/>}
        />
    )
}

export default MessagesScreen

const styles = StyleSheet.create({})
