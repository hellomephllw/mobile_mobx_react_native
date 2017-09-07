import { screenConst } from './registerScreens';
import tempIcon from '../images/temp.png';
import twoIcon from '../images/two.png';

//所有tab screen
export default tabScreens = [
    {
        screenKey: screenConst._TEST_SCREEN,
        screenTitle: 'Test',
        tabLabel: 'test',
        // labelColor: '',
        // labelFontSize: '',
        tabIcon: tempIcon
    },
    {
        screenKey: screenConst._TEST2_SCREEN,
        screenTitle: 'Test2',
        tabLabel: 'test2',
        // labelColor: '',
        // labelFontSize: '',
        tabIcon: twoIcon
    },
    {
        screenKey: screenConst._TEST3_SCREEN,
        screenTitle: 'Test3',
        tabLabel: 'test3',
        // labelColor: '',
        // labelFontSize: '',
        tabIcon: tempIcon
    }
];