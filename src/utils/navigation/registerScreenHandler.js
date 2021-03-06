import { screens, screenConst } from '../../routes/registerScreens';

export default registerScreenHandler = {
    get: () => screens,
    getScreenByKey: key => screens[key],
    getKeys: () => screenConst
};