import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { GlobalContext } from '../context/GlobalContext';
import { RouteNames } from '../navigation/routeNames';
import { api } from '../services/BaseApi';


export default function SettingsScreen() {
	const navigation = useNavigation();
	
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button 
				title={'Logout'}
				onPress={ () => navigation.navigate(RouteNames.Login)}
			/>
		</View>
	);
}