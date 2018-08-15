import { FETCH_HIGHLIGHTS } from '../../constants'

const initialState = {
    title: '',
    achievments: [], 
    projects: [],
    isLoading: false    
}
export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_HIGHLIGHTS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}