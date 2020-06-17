import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import ListingEditScreen from './app/screens/ListingEditScreen';
import AccountScreen from './app/screens/AccountScreen';
import Screen from './app/components/Screen';

export default function App() {
	const requestPermission = async () => {
		const result = await ImagePicker.requestCameraRollPermissionsAsync();
		if (!result.granted)
			alert('You need to enable permission to access the library');
	};

	useEffect(() => {
		requestPermission();
	}, []);

	return <Screen></Screen>;
}
