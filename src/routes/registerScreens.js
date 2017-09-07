import TestScreen from '../components/test/TestScreen';
import Test2Screen from '../components/test/Test2Screen';

//常量
const screenConst = {
    _TEST_SCREEN: 'example.TestScreen',
    _TEST2_SCREEN: 'example.Test2Screen'
};

//注册所有screen
const screens = {
    [screenConst._TEST_SCREEN]: TestScreen,
    [screenConst._TEST2_SCREEN]: Test2Screen
};

export {
    screens,
    screenConst
};