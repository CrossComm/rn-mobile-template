import { CompositeScreenProps } from '@react-navigation/native';

export type Nav = {
    navigate: (value: string) => void;
};

export type RootStackParamList = {
    Login: undefined,
    BottomTabs: undefined,
};

export type BottomTabsParamList = {
    HomeScreen: undefined,
    SettingsScreen: undefined, 
};