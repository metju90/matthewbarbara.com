import apiCall from './common';
import { FETCH_HIGHLIGHTS } from '../constants';
const URL = 'https://predictor.gg/api/matthewbarbara/highlights';


export default () => dispatch => {
    dispatch({type: FETCH_HIGHLIGHTS, payload: { isLoading: true}})    
    apiCall(URL)
        .then(res => {
            dispatch({type: FETCH_HIGHLIGHTS, payload: res.data.highlights})
        })
        .catch(err => console.log('errorr ', err))
        .finally(() => {
            dispatch({type: FETCH_HIGHLIGHTS, payload: { isLoading: false}})
        });
}


