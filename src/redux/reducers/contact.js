import { FETCH_CONTACT } from '../../constants'

const initialState = {
    title: '', 
    content: []  
}
export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_CONTACT:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}