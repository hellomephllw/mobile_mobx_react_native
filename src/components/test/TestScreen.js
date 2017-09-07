import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
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

@inject('TestStore')
@observer
export default class TestScreen extends Component {

    constructor(props) {
        super(props);
        this._pressClickBtn = this._pressClickBtn.bind(this);
    }

    _pressClickBtn() {
        const { TestStore } = this.props;
        TestStore.doSomething();
    }

    render() {
        const { TestStore } = this.props;
        return (
            <View>
                <Text>Test!!</Text>
                <Text>{TestStore.name}</Text>
                <Text>{TestStore.age}</Text>
                <TouchableOpacity onPress={this._pressClickBtn}>
                    <Text>click</Text>
                </TouchableOpacity>
            </View>
        );
    }

}