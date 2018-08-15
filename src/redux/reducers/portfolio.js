import { FETCH_PORTFOLIO } from '../../constants'

const initialState = {
    title: '', 
    websites: [
        {
            title: '',
            url: ''
        }
    ],
    isLoading: false
};
export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_PORTFOLIO:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}