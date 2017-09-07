import tabScreensConfig from '../../routes/configureTabScreens';
import generalScreensConfig from '../../routes/configureGeneralScreens';
import drawerScreensConfig from '../../routes/configureDrawerScreens';

export default configureRoutesHandler = {
    getTabScreensConfig: () => tabScreensConfig,
    getGeneralScreensConfig: () => generalScreensConfig,
    getDrawerScreensConfig: () => drawerScreensConfig
};