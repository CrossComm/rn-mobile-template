import { Appearance } from 'react-native';

// TODO: Need to add an AppearnceProvider around app when ready to implement dark mode.
const colorScheme = Appearance.getColorScheme();

const sharedTheming = {
	// primary colors
	primaryGreen: '#79D598',
	primaryLightGray: '#F4F4F4',
	primaryBackgroundColor: '#1B57EE',
	secondaryBackgroundColor: '#FFF',
	primaryGray: '#B2B2B2',
	primaryBlue: '#1B57EE',
	primaryLightBlue: '#418CED',
	primaryWhite: '#FFFFFF',
	primaryDarkGray: '#5C5C5C',
	semiTransparentPrimaryLightGray: '#B2B2B280',

	// text
	primaryTextColor: '#000000',
	secondaryTextColor: '#000000',
	tertiaryTextColor: '#000000',
	blackTextColor: '#000000',
	errorTextColor: '#D30D53',

	// buttons
	primaryButtonColor: '#1B57EE',
	primaryButtonTextColor: '#FFF',
	primaryButtonColorDisabled: '#7AAEF2',
	primaryButtonUnderlayColor: '#5497EE',
	secondaryButtonColor: '#FFF',
	secondaryButtonTextColor: '#418CED',
	secondaryButtonColorDisabled: 'rgba(255,255,255,0.5)',
	secondaryButtonUnderlayColor: '#F2F2F2',
	tertiaryButtonUnderlayColor: 'rgba(242,242,242,0.3)',
	darkGrayButtonUnderlayColor: '#696969',
	dangerRedButtonColor: '#CA252D',
	dangerRedButtonUnderlayColor: '#d45056',
	dangerButtonDisabledColor: '#d9666c',
	favoriteRed: '#F84F58',

	// icons
	activeIconBlue: '#1C64F2',
	clearButtonColor: '#B3B6B7',

	// text inputs
	inputBorderColor: '#B2B2B2',
	placeHolderTextColor: '#B2B2B2',

	// borders
	primaryBorderColor: '#707070',
	midLightBorderColor: '#EAEAEA',
	lightBorderColor: '#F4F4F4',
	mapMarkerBorderColor: '#CFE1FA',

	// tutorial
	tutorialScreenBackground: '#1e62f1',
};

const lightTheme = {
	...sharedTheming,
};

// Can use this to easily support a dark theme later on
export const Theming = colorScheme === 'light' ? lightTheme : lightTheme;
