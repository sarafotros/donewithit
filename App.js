import React from 'react';
import {  View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen'
import AppButton from './app/components/AppButton';
import CardComponent from './app/components/CardComponent';
import moduleName from './app/components/AppText'

export default function App() {

  return (
		<View
			style={{
				padding: 20,
				paddingTop: 100,
				backgroundColor: '#f8f4f4',
			}}
    >
      <CardComponent
        title='Red Jacket for sale'
        subTitle='$100'
        image={require('./app/assets/jacket.jpg')}
      />
		</View>
	
	);
}


