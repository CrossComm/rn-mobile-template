import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Theming } from '../styles/theming';
import { verticalScale } from '../utils/sizeScaler';


const Tab = createBottomTabNavigator();

export function BottomTabs(): JSX.Element {
	return (
		<Tab.Navigator
			screenOptions={() => {
				return {
					headerShown: false,
					tabBarLabelStyle: {
						fontSize: verticalScale(13),
						fontWeight: 'bold',
					},
					tabBarItemStyle: {
						paddingBottom: verticalScale(5),
						paddingTop: verticalScale(5),
					},
					tabBarStyle: {
						backgroundColor: Theming.secondaryBackgroundColor,
						height: verticalScale(75),
					},
					tabBarAllowFontScaling: false,
					tabBarHideOnKeyboard: Platform.OS === 'android',
                    
				};
			}}>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Settings" component={SettingsScreen} />
		</Tab.Navigator>
	);
}