import apiCall from './common';
import { FETCH_PORTFOLIO } from '../constants';

const url = 'https://predictor.gg/api/matthewbarbara/portfolio';


export default () => dispatch => {
    dispatch({type: FETCH_PORTFOLIO, payload: { isLoading: true}})    
    apiCall(url)
        .then(res => {
            dispatch({type: FETCH_PORTFOLIO, payload: res.data.portfolio})
        })
        .catch(err => console.log('errorr ', err))
        .finally(() => {
            dispatch({type: FETCH_PORTFOLIO, payload: { isLoading: false}})
        });
}


