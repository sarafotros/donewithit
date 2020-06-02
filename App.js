import React from 'react';
import {  View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen'
import AppButton from './app/components/AppButton';
import CardComponent from './app/components/CardComponent';
import moduleName from './app/components/AppText'
import ListingDetailsScreens from './app/screens/ListingDetailsScreens'
import Screen from './app/components/Screen';
import Icon from './app/components/Icon'

export default function App() {

  return (
		<Screen>
      <Icon name="email" />
		</Screen>
	);
}


