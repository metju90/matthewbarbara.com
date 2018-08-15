import apiCall from './common';
import { FETCH_CONTACT } from '../constants';
const url = 'http://predict.local/api/matthewbarbara/contact';


export default () => dispatch => {
    console.log('wtf?!?! ok!!', dispatch);  
    dispatch({type: FETCH_CONTACT, payload: { isLoading: true}})
    apiCall(url)
        .then(res => {
            dispatch({type: FETCH_CONTACT, payload: res.data.contact})
            console.log('xi zovb?!??!', res);
        })
        .catch(err => console.log('errorr ', err))
        .finally(() => {
            dispatch({type: FETCH_CONTACT, payload: { isLoading: false}})
        });
}


