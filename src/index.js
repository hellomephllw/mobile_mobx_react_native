import indexAdaptor from './utils/navigation/indexAdaptor';
import TestStore from './stores/test/TestStore';

const stores = { TestStore };

indexAdaptor.startApp(stores);