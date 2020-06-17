import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import ListingEditScreen from './app/screens/ListingEditScreen';
import AccountScreen from './app/screens/AccountScreen';
import Screen from './app/components/Screen';

export default function App() {
	const requestPermission = async () => {
		const result = await ImagePicker.requestCameraRollPermissionsAsync();
	};

	useEffect(() => {
		requestPermission();
	}, []);

	return <Screen></Screen>;
}
