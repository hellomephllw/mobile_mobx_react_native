import configureRoutesHandler from './configureRoutesHandler';

export default indexAdaptor = {
    startApp() {
        const routes = configureRoutesHandler.get();

        console.log(routes);
    }
};