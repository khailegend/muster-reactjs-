import * as types from '../constants/actionTypes';
var initialState = false;

var Reducer =( state = initialState , action) => {
    switch(action.type){
        case types.SHOW_SNACKBAR:
            return !state
        case types.CLOSE_SNACKBAR:
            return false
        default: return state ;   
    }
   
}

export default Reducer;