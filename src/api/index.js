import urlConst from './config';

export default api = {
    getProfile() {
        return fetch(urlConst._GET_PROFILE, {method: 'POST'})
            .then(response => response.json())
            .catch(error => console.warn(error));
    }
};