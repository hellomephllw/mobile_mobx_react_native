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
        screenTitle: 'Test',
        tabLabel: 'test',
        // labelColor: '',
        // labelFontSize: '',
        tabIcon: twoIcon
    }
];