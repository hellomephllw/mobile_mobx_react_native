import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    PixelRatio,
    TouchableOpacity,
    View
} from 'react-native';
import BaseCpn from '../../common/components/base/BaseCpn';

@inject('TestStore')
@observer
export default class TestScreen extends BaseCpn {

    constructor(props) {
        super(props);
        this._onPressClickBtn = this._onPressClickBtn.bind(this);
        this._onPressGoScreen4Btn = this._onPressGoScreen4Btn.bind(this);
    }

    _onPressClickBtn() {
        const { TestStore } = this.props;
        TestStore.doSomething();
    }

    _onPressGoScreen4Btn() {
        // console.log(this.getScreenKeys());
        // console.log(this.navScreenKeys._TEST4_SCREEN);
        this.navPush(this.navScreenKeys._TEST4_SCREEN);
    }

    render() {
        const { TestStore } = this.props;
        return (
            <View>
                <Text>Test!!</Text>
                <Text>{TestStore.name}</Text>
                <Text>{TestStore.age}</Text>
                <TouchableOpacity onPress={this._onPressClickBtn}>
                    <Text>click</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressGoScreen4Btn}>
                    <Text>go screen44</Text>
                </TouchableOpacity>
            </View>
        );
    }

}