import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen'
import colors from '../config/colors'
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
	{
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary,
		},
	},
	{
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary,
		},
	},
];

const AccountScreen = (props) => {
    return (
			<Screen style={styles.screen}>
				<View style={styles.container}>
					<ListItem
						title="Sara Fotros"
						subTitle="sarafotros@gmail.com"
						image={require('../assets/sara.jpg')}
					/>
				</View>
				<View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItems => menuItems.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => 
                        <ListItem
                            title={item.title}
                            IconComponent={
                         <Icon name={item.icon.name}  backgroundColor={item.icon.backgroundColor}  />
                        } />
                    }
                />
            </View>
            <ListItem 
                title='Log Out'
                IconComponent={
                    <Icon name='logout' backgroundColor='#ffe66d' />
                }
            />
			</Screen>
		);
}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
       marginVertical: 20, 
    },
    screen: {
        backgroundColor: colors.light
    }
})
