import React,{useState} from 'react';
import {  View, TextInput, Text, Switch } from 'react-native';

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
import AppTextInput from './app/components/AppTextInput';

export default function App() {
   const [isNew, setIsNew] = useState(false)

  return (
    <Screen>
      <Switch value={isNew} onValueChange={ newValue => setIsNew(newValue)}/>
    </Screen>
  )
}


