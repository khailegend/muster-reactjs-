import * as types from '../constants/actionTypes';
var initialState = false;

var Reducer =( state = initialState , action) => {
    switch(action.type){
        case types.SHOW_DETAIL_STUDENT:
            return !state
        case types.CLOSE_DETAIL_STUDENT:
            return false
        default: return state ;   
    }
   
}

export default Reducer;