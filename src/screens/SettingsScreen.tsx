import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Button } from 'react-native';
import { RouteNames } from '../navigation/routeNames';
import { Nav } from '../types/NavigationTypes';


export default function SettingsScreen() {
	const navigation = useNavigation<Nav>();
	
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button 
				title={'Logout'}
				onPress={ () => navigation.navigate(RouteNames.Login)}
			/>
		</View>
	);
}