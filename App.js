import React,{useState} from 'react';
import {  View, TextInput, Text } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen'
import AppButton from './app/components/AppButton';
import CardComponent from './app/components/CardComponent';
import moduleName from './app/components/AppText'
import ListingDetailsScreens from './app/screens/ListingDetailsScreens'
import Screen from './app/components/Screen';
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem'
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
  const [firstName, setFirsName] = useState('')
  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput 
        keyboardType='phone-pad'
        clearButtonMode
        maxLength={12}
        onChangeText={text => setFirsName(text)}
        placeholder='First Name'
        style={{
          borderBottomColor: '#ccc',
          borderBottomWidth:2
        }}
      />
    </Screen>
  )
}


