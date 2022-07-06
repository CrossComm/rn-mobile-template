import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput } from 'react-native';
import { DemoCard } from '../components/DemoCard';
import { GlobalContext } from '../context/GlobalContext';
import { RouteNames } from '../navigation/routeNames';
import { api } from '../services/BaseApi';
import { verticalScale } from '../utils/sizeScaler';


export default function HomeScreen() {
	const navigation = useNavigation();

	const [githubContent, setGithubContent] = useState({});
	const [username, setUsername] = useState('leavitdav01');

	const context = useContext(GlobalContext);

	// useEffect(() => {
	// 	getAndSetData('leavitdav01');
	// }, []);

	const getAndSetData = () => {
		void api
			.get('/users/' + username)
			.then(response => setGithubContent(response.data));
	};
		
	console.log(githubContent);
	
	return (
		<View style={styles.wrapper}>
			<View style={styles.cardWrapper}>
				<View style={styles.imageWrapper}>
					<Image
						source={{uri: githubContent.avatar_url}}
						resizeMode="cover"
						style={styles.avatarImage}
					/>
				</View>
				<Text style={styles.nameText}>{githubContent.name}</Text>
				<Text style={styles.usernameText}>{githubContent.login}</Text>
				<Text style={styles.locationText}>{githubContent.location}</Text>
				<Text style={styles.companyText}>{githubContent.company}</Text>
			</View>

			<TextInput style={styles.textInput} onChangeText={setUsername} value={username}/>
			<Button title={'Press to look up a new username'} onPress={getAndSetData}/>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		marginVertical: verticalScale(30),
		alignContent: 'center',
		justifyContent: 'center',
	},
	cardWrapper: {
		backgroundColor: 'white',
		paddingTop: 20,
		marginHorizontal: 30, 
		borderRadius: 200/2,
		shadowColor: '#999',
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
	},
	imageWrapper: {
		height: '50%',
		width: '50%',
		alignSelf: 'center',
		borderRadius: 200/2,
		shadowColor: '#999',
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
	},
	avatarImage: {
		height: '100%',
		width: '100%',
		alignSelf: 'center',
		borderRadius: 200/2,
	},
	nameText: {
		alignSelf: 'center',
		fontSize: 50,
		color: '#444',
	},
	usernameText: {
		alignSelf: 'center',
		fontSize: 20,
		color: '#444',
	},
	locationText: {
		alignSelf: 'center',
		fontSize: 20,
		color: '#444',
	},
	companyText: {
		alignSelf: 'center',
		fontSize: 30,
		color: '#444',
	},
	textInput: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		fontSize: 15,
		color: '#444',
		borderRadius: 10,
	}
});