import apiCall from './common';
import { FETCH_CONTACT } from '../constants';
const url = 'https://predictor.gg/api/matthewbarbara/contact';


export default () => dispatch => {
    dispatch({type: FETCH_CONTACT, payload: { isLoading: true}})
    apiCall(url)
        .then(res => {
            dispatch({type: FETCH_CONTACT, payload: res.data.contact})
        })
        .catch(err => console.log('errorr ', err))
        .finally(() => {
            dispatch({type: FETCH_CONTACT, payload: { isLoading: false}})
        });
}


