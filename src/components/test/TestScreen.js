import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    PixelRatio,
    TouchableOpacity,
    View
} from 'react-native';

export default class TestScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Test!!</Text>
            </View>
        );
    }

}