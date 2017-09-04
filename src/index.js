//引入stores

//引入App组件

//利用util的navigation工具整合导航

// import App from './app';

import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';

import registerScreens from 'routes/registerScreen';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Test',
            screen: 'example.TestScreen', // this is a registered name for a screen
            icon: require('./images/one.png'),
            title: 'Test Screen'
        }
    ],
    tabsStyle: {//ios
    },
    appStyle: {//android
        forceTitlesDisplay: true
    },
    animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade'
});