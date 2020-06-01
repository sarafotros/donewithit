import React from 'react';
import {  View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen'
import AppButton from './app/components/AppButton';

export default function App() {

  return (
		<View
			style={{
        padding: 20,
        paddingTop:100,
        backgroundColor: '#f8f4f4'
			}}
		>
      <Card
        title='Red Jacket for sale'
        subTitle='$100'
        image='./app/assets/jacket.jpg'
    />
    </View>
    // <WelcomeScreen/>
	);
}


