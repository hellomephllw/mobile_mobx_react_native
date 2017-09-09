import { observable, action } from 'mobx';
import api from '../../api';

class TestStore {
    @observable name = 'zhangsan';
    @observable age = 18;
    @observable networkJson = {};

    @action doSomething() {
        this.age++;
    }
    @action getJson(callback) {
        fetch('http://10.0.0.239:3002/getProfile', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            })
        })
            .then(response => response.json())
            .then(json => callback(json))
            .catch(error => console.warn(error));
    }
    @action async getJsonSync() {
        // const json = await this.getProfile();
        const json = await api.getProfile();

        console.log('====');
        console.log(json);

        this.networkJson = json;
    }

    getProfile() {
        return fetch('http://10.0.0.239:3002/getProfile', {method: 'POST'})
            .then(response => response.json())
            // .then(json => json)
            .catch(error => console.warn(error));
    }
}

export default new TestStore();