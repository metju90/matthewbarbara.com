import { FETCH_ABOUT } from '../../constants'

const initialState = {
    title: '', 
    content: '',
    isLoading: false    
}
export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_ABOUT:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}