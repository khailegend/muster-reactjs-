import * as types from '../constants/actionTypes';
var initialState = 'All';

var Reducer =( state = initialState , action) => {
    switch(action.type){
        case types.ADD_KEY_CONTROL_CLASS_LIST:
            state = action.keyControl 
            return state
        default: return state ;   
    }
}

export default Reducer;