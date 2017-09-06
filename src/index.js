//引入stores

//引入App组件

//利用util的navigation工具整合导航

// import App from './app';

import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';

import registerScreens from './routes/registerScreen';
import TestStore from './stores/test/TestStore';
import RnnProvider from './utils/navigation/react-native-navigation/RnnProvider';

var stores = {TestStore};

registerScreens(stores, RnnProvider); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Test',
            screen: 'example.TestScreen', // this is a registered name for a screen
            icon: require('./images/temp.png'),
            title: 'Test Screen'
        },
        {
            label: 'Test2',
            screen: 'example.Test2Screen', // this is a registered name for a screen
            icon: require('./images/two.png'),
            title: 'Test2 Screen',
            // iconInsets: { // add this to change icon position (optional, iOS only).
            //     top: 5, // optional, default is 0.
            //     left: 5, // optional, default is 0.
            //     bottom: 5, // optional, default is 0.
            //     right: 5 // optional, default is 0.
            // }
        }
    ],
    tabsStyle: {//ios
        tabBarLabelColor: '#ffb700',
        tabBarButtonColor: '#000',
        // tabBarTextFontSize: 18
    },
    appStyle: {//android
        forceTitlesDisplay: true
    },
    animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade'
});