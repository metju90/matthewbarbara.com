import axios from 'axios';

export default (url, method = 'get') => {
    const settings = {
        method,
        url,
        headers: {
            'Accept': 'application/json'
        }
    }
    return axios(settings);
}