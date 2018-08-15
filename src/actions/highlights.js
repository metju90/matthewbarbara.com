import apiCall from './common';
import { FETCH_HIGHLIGHTS } from '../constants';
const URL = 'http://predict.local/api/matthewbarbara/highlights';


export default () => dispatch => {
    console.log('wtf?!?! ok!!', dispatch);
    dispatch({type: FETCH_HIGHLIGHTS, payload: { isLoading: true}})    
    apiCall(URL)
        .then(res => {
            dispatch({type: FETCH_HIGHLIGHTS, payload: res.data.highlights})
            console.log('xi zovb?!??!', res);
        })
        .catch(err => console.log('errorr ', err))
        .finally(() => {
            dispatch({type: FETCH_HIGHLIGHTS, payload: { isLoading: false}})
        });
}


