import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Constance from 'expo-constants';


const Screen = ({ children, style }) => {
    return <SafeAreaView style={[styles.screen, style]}>
        <View style={style}>
        {children}
        </View>
    </SafeAreaView>;
};

export default Screen

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constance.statusBarHeight,
        flex: 1,
    }
});
