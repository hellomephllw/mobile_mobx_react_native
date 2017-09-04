import { Navigation } from 'react-native-navigation';

import TestScreen from '../components/test/TestScreen';

// register all screens of the app (including internal ones)
export default () => {
    Navigation.registerComponent('example.TestScreen', () => TestScreen);
};