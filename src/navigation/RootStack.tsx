import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import { BottomTabs } from './BottomTabs';
import { RouteNames } from './routeNames';

const Stack = createNativeStackNavigator();

export default function RootStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen name={RouteNames.BottomTabs} component={BottomTabs} options={{headerShown: false}}/>
				<Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}