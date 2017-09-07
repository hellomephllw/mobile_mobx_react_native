/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Root from './src';
export default class rnTest extends Component {
    render() {
        return (
            <View>
              <Root />
            </View>
        );
    }
}

AppRegistry.registerComponent('rnTest', () => rnTest);