import React, { useEffect } from 'react';
import {
	StyleSheet,
	TouchableWithoutFeedback,
	View,
	Image,
	Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export default function ImageInput({ imageUri, onChangeImage }) {
	useEffect(() => {
		requestPermission();
	}, []);

	const requestPermission = async () => {
		// const result  = await Permission.askAsync(Permission.CAMERA_ROLL, Permission.LOCATION)
		const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
		if (!granted) alert('You need to enable permission to access the library');
	};

	const handlePress = () => {
		if (!imageUri) selectImage();
		else
			Alert.alert('Delete', 'Are you sure?', [
				{ text: 'Yes', onPress: () => onChangeImage(null) },
				{ text: 'No' },
			]);
	};
	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});
			if (!result.cancelled) onChangeImage(result.uri);
		} catch (error) {
			console.log('Error reading an image');
		}
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!imageUri && (
					<MaterialCommunityIcons
						color={colors.medium}
						name="camera"
						size={40}
					/>
				)}
				{imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: colors.light,
		borderRadius: 15,
		justifyContent: 'center',
		height: 100,
		overflow: 'hidden',
		width: 100,
	},
	image: {
		width: '100%',
		height: '100%',
	},
});
