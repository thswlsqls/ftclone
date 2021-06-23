import {
    CHOOSED_MINIFORM
} from '../REDUX_actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state={}, action){
    switch(action.type){
        
        case CHOOSED_MINIFORM:
            return { ...state, miniformData: action.payload }   
        default:
            return state;
    }
}
