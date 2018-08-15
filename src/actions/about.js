import apiCall from './common';
import { FETCH_ABOUT } from '../constants';

const URL = 'http://predict.local/api/matthewbarbara/about';

export default () => dispatch => {
    console.log('wtf?!?! ok!!', dispatch);
    dispatch({type: FETCH_ABOUT, payload: { isLoading: true}})    
    apiCall(URL)
        .then(res => {
            dispatch({type: FETCH_ABOUT, payload: res.data.about})
            console.log('xi zovb?!??!', res);
        })
        .catch(err => console.log('errorr ', err))
        .finally(() => {
            dispatch({type: FETCH_ABOUT, payload: { isLoading: false}})
        });
}


