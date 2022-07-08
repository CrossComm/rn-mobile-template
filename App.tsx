import * as React from 'react';
import RootStack from './src/navigation/RootStack';

if(__DEV__) {
	import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

export default function App() {
	return (
		<RootStack />
	);
}