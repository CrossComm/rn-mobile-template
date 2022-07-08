import { useNavigation } from '@react-navigation/native';
import React, {
	useState,
} from 'react';
import {
	Linking,
	Pressable,
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { RouteNames } from '../navigation/routeNames';
import { Theming } from '../styles/theming';
import { scale, verticalScale } from '../utils/sizeScaler';
import { isValidEmail } from '../utils/validationHelpers';
import HomeScreen from './HomeScreen';
import CrossCommLogo from '../assets/CrossCommLogo.svg';

export default function Login() {
	const navigation = useNavigation();
	const safeArea = useSafeAreaInsets();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [usernameError, setUsernameError] = useState('');

	//validates email input
	const handleUsernameChange = (text: string) => {
		setUsername(text);
		if (isValidEmail(text)) {
			setUsernameError('');
		}
	};

	const handleLogin = () => {
		navigation.navigate(RouteNames.BottomTabs);
	};


	return (
		<View >
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<CrossCommLogo />
			</View>
			<View 
				style={styles.wrapper}
			>
				<TextInput
					style={styles.loginInput}
					placeholder="Email"
					placeholderTextColor={Theming.primaryGray}
					onChangeText={handleUsernameChange}
					value={username}
					textContentType="username"
					onBlur={() => {
						if (!isValidEmail(username)) {
							setUsernameError('Email is not Valid');
							return;
						}
						setUsernameError('');
					}}
					autoCapitalize="none"
					keyboardType="email-address"
				/>
				{usernameError ? (
					<View
						style={{
							marginTop: verticalScale(-8),
							marginBottom: verticalScale(8),
						}}
					>
						<Text style={styles.errorText}>{usernameError}</Text>
					</View>
				) : undefined}
				<View style={{ position: 'relative' }}>
					<TextInput
						style={styles.loginInput}
						placeholder="Password"
						placeholderTextColor={Theming.primaryGray}
						secureTextEntry={!showPassword}
						onChangeText={setPassword}
						autoCapitalize={'none'}
						value={password}
						textContentType="password"
					/>
					<Pressable
						style={styles.showTextWrapper}
						onPress={() => setShowPassword(!showPassword)}
					>
						<Text style={styles.showText}>
							{showPassword ? 'HIDE' : 'SHOW'}
						</Text>
					</Pressable>
				</View>
				<View style={styles.buttonsWrapper}>
					<View style={styles.loginButton}>
						<Button
							onPress={handleLogin}
							// disabled={!password || !username || !!usernameError}
							title={'Login'}
						/>
					</View>
				</View>
				<Pressable
				// onPress={navigation.navigate(RouteNames.ForgotPassword)}
				>
					<Text
						style={styles.forgotPasswordText}
					>
						{'Forgot Password'}
					</Text>
				</Pressable>
			</View>
			<View
				style={{
					position: 'absolute',
					bottom: safeArea.bottom + verticalScale(4),
					right: scale(8),
				}}
			>
				{/* <Text style={{ fontSize: 11 }}>{`${
					env?.[0]
				} ${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`}</Text> */}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		paddingBottom: verticalScale(0),
		paddingHorizontal: verticalScale(16),
		backgroundColor: Theming.secondaryBackgroundColor,
		justifyContent: 'center',
		height: '100%',
	},
	logoWrapper: {
		alignItems: 'center',
	},
	buttonsWrapper: {
		width: '100%',
		alignItems: 'center',
		marginTop: verticalScale(20),
	},
	loginButton: {
		width: '100%',
		alignItems: 'center',
		marginBottom: verticalScale(16),
	},
	loginInput: {
		padding: verticalScale(12),
		borderColor: Theming.primaryGray,
		borderWidth: verticalScale(1),
		borderRadius: verticalScale(5),
		color: Theming.primaryTextColor,
		fontWeight: 'bold',
		fontSize: verticalScale(14),
		marginBottom: verticalScale(16),
		height: verticalScale(50),
	},
	errorText: {
		color: Theming.errorTextColor,
		fontSize: verticalScale(14),
	},
	forgotPasswordText: {
		color: Theming.primaryTextColor,
		textAlign: 'center',
	},
	showTextWrapper: {
		position: 'absolute',
		top: 0,
		right: 0,
		height: '70%',
		paddingHorizontal: verticalScale(8),
		justifyContent: 'center',
	},
	showText: {
		fontWeight: 'bold',
		color: Theming.primaryGray,
		fontSize: verticalScale(11),
		letterSpacing: verticalScale(0.75),
	},
});
