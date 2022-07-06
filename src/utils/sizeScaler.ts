import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: number) => (deviceWidth / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
	(deviceHeight / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
	size + (scale(size) - size) * factor;
const verticalModerateScale = (size: number, factor = 0.5) =>
	size + (verticalScale(size) - size) * factor;

export {
	scale,
	verticalScale,
	moderateScale,
	verticalModerateScale,
	deviceHeight,
	deviceWidth,
};
