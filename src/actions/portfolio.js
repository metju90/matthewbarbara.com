import apiCall from './common';
import { FETCH_PORTFOLIO } from '../constants';

const url = 'http://predict.local/api/matthewbarbara/portfolio';


export default () => dispatch => {
    console.log('wtf?!?! ok!!', dispatch);
    dispatch({type: FETCH_PORTFOLIO, payload: { isLoading: true}})    
    apiCall(url)
        .then(res => {
            dispatch({type: FETCH_PORTFOLIO, payload: res.data.portfolio})
            console.log('xi zovb?!??!', res);
        })
        .catch(err => console.log('errorr ', err))
        .finally(() => {
            dispatch({type: FETCH_PORTFOLIO, payload: { isLoading: false}})
        });
}


