import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import { BottomTabs } from './BottomTabs';
import { RouteNames } from './routeNames';
import { RootStackParamList } from '../types/NavigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

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