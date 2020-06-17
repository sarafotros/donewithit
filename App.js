import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permission from 'expo-permissions';

import ListingEditScreen from './app/screens/ListingEditScreen';
import AccountScreen from './app/screens/AccountScreen';
import Screen from './app/components/Screen';
import { Button, Image } from 'react-native';

export default function App() {
	const [imageUri, setImageUri] = useState();

	const requestPermission = async () => {
		// const result  = await Permission.askAsync(Permission.CAMERA_ROLL, Permission.LOCATION)
		const result = await ImagePicker.requestCameraRollPermissionsAsync();
		if (!result.granted)
			alert('You need to enable permission to access the library');
	};

	useEffect(() => {
		requestPermission();
	}, []);

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync();
			if (!result.cancelled) setImageUri(result.uri);
		} catch (error) {
			console.log('Error reading an image');
		}
	};

	return (
		<Screen>
			<Button title="Select Image" onPress={selectImage} />
			<Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
		</Screen>
	);
}
