import apiCall from './common';
import { FETCH_ABOUT } from '../constants';

const URL = 'https://predictor.gg/api/matthewbarbara/about';

export default () => dispatch => {
    dispatch({type: FETCH_ABOUT, payload: { isLoading: true}})    
    apiCall(URL)
        .then(res => {
            dispatch({type: FETCH_ABOUT, payload: res.data.about})
        })
        .catch(err => console.log('errorr ', err))
        .finally(() => {
            dispatch({type: FETCH_ABOUT, payload: { isLoading: false}})
        });
}


