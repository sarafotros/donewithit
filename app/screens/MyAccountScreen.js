import React from 'react'
import { StyleSheet, View  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';


export default function MyAccountScreen() {
    return (
        <View>
            <View></View>
				<MaterialCommunityIcons
					name="format-list-bulleted"
					size={35}
					color={colors.primary}
				/>
				<MaterialCommunityIcons
					name="email"
					size={35}
					color={colors.secondary}
				/>
				<MaterialCommunityIcons
					name="logout"
					size={35}
					color={colors.yellow}
				/>
			</View>
		);
}
const styles = StyleSheet.create({
    
})