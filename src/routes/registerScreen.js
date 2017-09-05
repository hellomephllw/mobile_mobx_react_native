import { Navigation } from 'react-native-navigation';

import TestScreen from '../components/test/TestScreen';
import Test2Screen from '../components/test/Test2Screen';

// register all screens of the app (including internal ones)
export default () => {
    Navigation.registerComponent('example.TestScreen', () => TestScreen);
    Navigation.registerComponent('example.Test2Screen', () => Test2Screen);
};